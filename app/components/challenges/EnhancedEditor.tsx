'use client';

import { useEffect, useState, useRef } from 'react';
import Editor, { Monaco } from '@monaco-editor/react';
import { FiPlay, FiRotateCcw, FiCheck, FiX, FiClock } from 'react-icons/fi';
import type { TestResult } from '@/types/challenges';

interface EnhancedEditorProps {
  initialCode: string;
  language?: string;
  theme?: string;
  onSubmit: (code: string) => Promise<void>;
  onTest: (code: string) => Promise<TestResult[]>;
}

export default function EnhancedEditor({
  initialCode,
  language = 'javascript',
  theme = 'vs-dark',
  onSubmit,
  onTest,
}: EnhancedEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<TestResult[]>([]);
  const [showHints, setShowHints] = useState(false);
  const editorRef = useRef<any>(null);
  const monacoRef = useRef<Monaco | null>(null);

  useEffect(() => {
    // Reset results when code changes
    setResults([]);
  }, [code]);

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    // Add custom themes
    monaco.editor.defineTheme('pathforge-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#1a1b26',
        'editor.foreground': '#a9b1d6',
        'editor.lineHighlightBackground': '#1f202e',
        'editor.selectionBackground': '#515c7e',
        'editorCursor.foreground': '#c0caf5',
      },
    });

    // Configure editor settings
    editor.updateOptions({
      fontSize: 14,
      fontFamily: 'JetBrains Mono, Fira Code, monospace',
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      lineNumbers: 'on',
      renderLineHighlight: 'all',
      matchBrackets: 'always',
      autoClosingBrackets: 'always',
      autoClosingQuotes: 'always',
      formatOnPaste: true,
      formatOnType: true,
    });

    // Add keyboard shortcuts
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      handleRunTests();
    });
  };

  const handleRunTests = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setResults([]);

    try {
      const testResults = await onTest(code);
      setResults(testResults);

      // If all tests pass, enable submit button
      if (testResults.every(r => r.passed)) {
        setShowHints(false);
      } else {
        setShowHints(true);
      }
    } catch (error) {
      setResults([
        {
          passed: false,
          message: `Error: ${error.message}`,
          executionTime: 0,
          error: error.message,
        },
      ]);
    } finally {
      setIsRunning(false);
    }
  };

  const handleSubmit = async () => {
    if (isRunning || !results.every(r => r.passed)) return;
    setIsRunning(true);

    try {
      await onSubmit(code);
    } catch (error) {
      console.error('Failed to submit:', error);
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setResults([]);
    setShowHints(false);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="border-b px-4 py-2 flex justify-between items-center bg-gray-50">
          <div className="text-sm font-medium text-gray-700">Code Editor</div>
          <div className="flex gap-2">
            <button
              onClick={handleReset}
              className="px-3 py-1 text-sm border rounded hover:bg-gray-50 flex items-center gap-1"
            >
              <FiRotateCcw className="w-4 h-4" /> Reset
            </button>
            <button
              onClick={handleRunTests}
              disabled={isRunning}
              className="px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-900 flex items-center gap-1 disabled:opacity-50"
            >
              <FiPlay className="w-4 h-4" /> Run Tests
            </button>
          </div>
        </div>
        <Editor
          height="400px"
          language={language}
          value={code}
          onChange={(value) => setCode(value || '')}
          theme={theme}
          onMount={handleEditorDidMount}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            rulers: [],
            wordWrap: 'on',
            wrappingIndent: 'indent',
            automaticLayout: true,
            tabSize: 2,
            scrollBeyondLastLine: false,
          }}
        />
      </div>

      {/* Test Results */}
      {results.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="px-4 py-2 border-b bg-gray-50 flex justify-between items-center">
            <h3 className="font-medium text-gray-900">Test Results</h3>
            {results.every(r => r.passed) && (
              <button
                onClick={handleSubmit}
                disabled={isRunning}
                className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-1 disabled:opacity-50"
              >
                <FiCheck className="w-4 h-4" /> Submit Solution
              </button>
            )}
          </div>
          <div className="p-4 space-y-2">
            {results.map((result, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  result.passed ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {result.passed ? (
                      <FiCheck className="w-5 h-5 text-green-600" />
                    ) : (
                      <FiX className="w-5 h-5 text-red-600" />
                    )}
                    <span>{result.message}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm opacity-75">
                    <FiClock className="w-4 h-4" />
                    {result.executionTime.toFixed(2)}ms
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

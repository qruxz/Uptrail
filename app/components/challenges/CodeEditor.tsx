import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { Play, RefreshCw } from 'lucide-react';

interface TestCase {
  input: any;
  expected: any;
}

interface CodeEditorProps {
  initialCode: string;
  language?: string;
  testCases: TestCase[];
  onSubmit: (code: string) => void;
}

export default function CodeEditor({
  initialCode,
  language = 'javascript',
  testCases,
  onSubmit
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<Array<{ passed: boolean; message: string }>>([]);

  const runTests = async () => {
    setIsRunning(true);
    setResults([]);

    try {
      // Create a function from the code
      const userFunction = new Function('return ' + code)();
      
      const testResults = testCases.map((testCase, index) => {
        try {
          const result = userFunction(testCase.input);
          const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
          return {
            passed,
            message: passed
              ? `Test case ${index + 1} passed!`
              : `Test case ${index + 1} failed. Expected ${JSON.stringify(testCase.expected)}, but got ${JSON.stringify(result)}`
          };
        } catch (error) {
          return {
            passed: false,
            message: `Test case ${index + 1} failed: ${error.message}`
          };
        }
      });

      setResults(testResults);

      // If all tests pass, submit the solution
      if (testResults.every(r => r.passed)) {
        onSubmit(code);
      }
    } catch (error) {
      setResults([
        {
          passed: false,
          message: `Error: ${error.message}`
        }
      ]);
    }

    setIsRunning(false);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="border-b px-4 py-2 flex justify-between items-center bg-gray-50">
          <div className="text-sm font-medium text-gray-700">Code Editor</div>
          <div className="flex gap-2">
            <button
              onClick={() => setCode(initialCode)}
              className="px-3 py-1 text-sm border rounded hover:bg-gray-50 flex items-center gap-1"
            >
              <RefreshCw className="w-4 h-4" /> Reset
            </button>
            <button
              onClick={runTests}
              disabled={isRunning}
              className="px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-900 flex items-center gap-1 disabled:opacity-50"
            >
              <Play className="w-4 h-4" /> Run Tests
            </button>
          </div>
        </div>
        <Editor
          height="400px"
          language={language}
          value={code}
          onChange={(value) => setCode(value || '')}
          theme="vs-light"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            rulers: [],
            wordWrap: 'on',
            wrappingIndent: 'indent',
            automaticLayout: true,
            tabSize: 2,
            scrollBeyondLastLine: false
          }}
        />
      </div>

      {/* Test Results */}
      {results.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="px-4 py-2 border-b bg-gray-50">
            <h3 className="font-medium text-gray-900">Test Results</h3>
          </div>
          <div className="p-4 space-y-2">
            {results.map((result, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  result.passed ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}
              >
                {result.message}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

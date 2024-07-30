import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  // React Arrow Function Component 스니펫 삽입
  let arrowFunctionDisposable = vscode.commands.registerCommand(
    'react-snippets.insertArrowFunction',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const filePath = editor.document.fileName;
        const fileName = path.basename(filePath, path.extname(filePath));
        const componentName =
          fileName.charAt(0).toUpperCase() + fileName.slice(1);

        const snippet = new vscode.SnippetString(
          `const ${componentName} = () => {\n` +
            `  return (\n` +
            `    <>\n` +
            `      $0\n` +
            `    </>\n` +
            `  );\n` +
            `};\n\n` +
            `export default ${componentName};`
        );

        await editor.insertSnippet(snippet);
      }
    }
  );

  // React Function Component 스니펫 삽입
  let functionDisposable = vscode.commands.registerCommand(
    'react-snippets.insertFunction',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const filePath = editor.document.fileName;
        const fileName = path.basename(filePath, path.extname(filePath));
        const componentName =
          fileName.charAt(0).toUpperCase() + fileName.slice(1);

        const snippet = new vscode.SnippetString(
          `function ${componentName}() {\n` +
            `  return (\n` +
            `    <>\n` +
            `      $0\n` +
            `    </>\n` +
            `  );\n` +
            `}\n\n` +
            `export default ${componentName};`
        );

        await editor.insertSnippet(snippet);
      }
    }
  );

  context.subscriptions.push(arrowFunctionDisposable);
  context.subscriptions.push(functionDisposable);
}

export function deactivate() {}

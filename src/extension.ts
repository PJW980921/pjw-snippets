import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'react-snippets.insertComponent',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const filePath = editor.document.fileName;
        const fileName = path.basename(filePath, path.extname(filePath));
        const componentName =
          fileName.charAt(0).toUpperCase() + fileName.slice(1);

        const snippet = new vscode.SnippetString(
          `const ${componentName} = () => {\n` +
            `\treturn (\n` +
            `\t\t<>\n` +
            `\t\t\t$0\n` +
            `\t\t</>\n` +
            `\t);\n` +
            `};\n\n` +
            `export default ${componentName};`
        );

        editor.insertSnippet(snippet);
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}

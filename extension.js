const vscode = require("vscode");
const path = require("path");
const fs = require("fs");

function activate(context) {
  console.log('Congratulations, your extension "codesnippet" is now active!');

  let disposable = vscode.commands.registerCommand(
    "codesnippet.createCode",
    function () {
      vscode.window
        .showQuickPick([
          "HTML",
          "JavaScript",
          "FastAPI",
          "Flask",
          "C",
          "C++",
          "Java",
          "Rust",
          "Python",
          "Ruby",
          "Go",
          "Swift",
          "PHP",
          "TypeScript",
          "Kotlin",
          "MATLAB",
          "R",
          "Perl",
          "Bash",
          "SQL",
          "Scala",
          "C#",
          "YAML",
          "JSON",
          "MarkDown",
        ])
        .then((selection) => {
          if (selection === "HTML") {
            createFileWithContent("index.html", getHTMLTemplate());
          } else if (selection === "JavaScript") {
            createFileWithContent("main.js", getJavaScriptTemplate());
          } else if (selection === "FastAPI") {
            createFileWithContent("main.py", getFastAPITemplate());
          } else if (selection === "Flask") {
            createFileWithContent("main.py", getFlaskTemplate());
          } else if (selection === "C") {
            createFileWithContent("main.c", getCTemplate());
          } else if (selection === "C++") {
            createFileWithContent("main.cpp", getCPPTemplate());
          } else if (selection === "Java") {
            createFileWithContent("Main.java", getJavaTemplate());
          } else if (selection === "Rust") {
            createFileWithContent("main.rs", getRustTemplate());
          } else if (selection === "Python") {
            createFileWithContent("main.py", getPythonTemplate());
          } else if (selection === "Ruby") {
            createFileWithContent("main.rb", getRubyTemplate());
          } else if (selection === "Go") {
            createFileWithContent("main.go", getGoTemplate());
          } else if (selection === "Swift") {
            createFileWithContent("main.swift", getSwiftTemplate());
          } else if (selection === "PHP") {
            createFileWithContent("main.php", getPHPTemplate());
          } else if (selection === "TypeScript") {
            createFileWithContent("main.ts", getTypeScriptTemplate());
          } else if (selection === "Kotlin") {
            createFileWithContent("Main.kt", getKotlinTemplate());
          } else if (selection === "MATLAB") {
            createFileWithContent("main.m", getMATLABTemplate());
          } else if (selection === "R") {
            createFileWithContent("main.R", getRTemplate());
          } else if (selection === "Perl") {
            createFileWithContent("main.pl", getPerlTemplate());
          } else if (selection === "Bash") {
            createFileWithContent("main.sh", getBashTemplate());
          } else if (selection === "SQL") {
            createFileWithContent("main.sql", getSQLTemplate());
          } else if (selection === "Scala") {
            createFileWithContent("Main.scala", getScalaTemplate());
          } else if (selection === "C#") {
            createFileWithContent("Main.cs", getCSharpTemplate());
          } else if (selection === "YAML") {
            createFileWithContent("Main.yaml", getYAMLTemplate());
          } else if (selection === "MarkDown") {
            createFileWithContent("Main.md", getMarkDownTemplate());
          } else if (selection === "JSON") {
            createFileWithContent("Main.json", getJSONTemplate());
          }
        });

      vscode.window.showInformationMessage("Code Snippet Has Executed!");
    }
  );

  context.subscriptions.push(disposable);
}

function createFileWithContent(filename, content) {
  const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
  if (workspaceFolder) {
    const filePath = path.join(workspaceFolder.uri.fsPath, filename);
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        vscode.window.showErrorMessage(
          `Failed to create ${filename}: ${err.message}`
        );
      } else {
        vscode.window.showInformationMessage(
          `${filename} created successfully!`
        );
      }
    });
  }
}

// Template functions for different programming languages

function getHTMLTemplate() {
  return `
<!DOCTYPE html> 
<html> 
<head> 
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<title>My HTML Page</title> </head> 
<body> 
<h1>Hello, HTML!</h1> 
</body>
</html> `;
}

function getJavaScriptTemplate() {
  return `console.log("Hello, JavaScript!")`;
}

function getFastAPITemplate() {
  return `
from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "FastAPI"}
    `;
}

function getFlaskTemplate() {
  return `
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello, Flask!"

if __name__ == '__main__':
    app.run()
    `;
}

function getCTemplate() {
  return `
#include <stdio.h>
int main() {
  printf("Hello, C!\n");

  return 0;
}
`;
}

function getCPPTemplate() {
  return `
#include <iostream>
int main() {
  std::cout << "Hello, C++!" << std::endl;
  return 0;
}
`;
}

function getJavaTemplate() {
  return `
public class Main 
{ 
  public static void main(String[] args) 
  { 
    System.out.println("Hello, Java!"); 
  } 
}`;
}

function getRustTemplate() {
  return `
fn main() 
{ 
  println!("Hello, Rust!"); 
} `;
}

function getPythonTemplate() {
  return `print("Hello, Python!") `;
}

function getRubyTemplate() {
  return `puts "Hello, Ruby!" `;
}
function getGoTemplate() {
  return `
package main
import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}
`;
}

function getSwiftTemplate() {
  return `
import Swift

print("Hello, Swift!")
`;
}

function getPHPTemplate() {
  return `
<?php
echo "Hello, PHP!";
`;
}

function getTypeScriptTemplate() {
  return `console.log('Hello, TypeScript!'); `;
}

function getKotlinTemplate() {
  return `
fun main() 
{ 
  println("Hello, Kotlin!") 
} `;
}

function getMATLABTemplate() {
  return `disp('Hello, MATLAB!') `;
}

function getRTemplate() {
  return `print("Hello, R!") `;
}
function getPerlTemplate() {
  return `print "Hello, Perl!\n"; `;
}

function getBashTemplate() {
  return `
#!/bin/bash
echo "Hello, Bash!"
  `;
}

function getSQLTemplate() {
  return `SELECT 'Hello, SQL!'; `;
}

function getScalaTemplate() {
  return `
object Main extends App 
{ 
  println("Hello, Scala!") 
} `;
}

function getCSharpTemplate() {
  return `
// C# code snippet
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }

    public void SayHello()
    {
        Console.WriteLine("Hello, World!");
    }
}
  `;
}

function getYAMLTemplate() {
  return `
# YAML code snippet
name: John Doe
age: 30
email: johndoe@example.com
  `;
}

function getMarkDownTemplate() {
  return `
  <!-- Markdown code snippet -->
# Heading 1
## Heading 2
### Heading 3

- List item 1
- List item 2
- List item 3

**Bold text**
*Italic text*
`;
}

function getJSONTemplate() {
  return `
// JSON code snippet
{
  "name": "John Doe",
  "age": 30,
  "email": "johndoe@example.com"
}
`;
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};

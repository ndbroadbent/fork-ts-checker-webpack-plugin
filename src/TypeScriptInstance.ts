// tslint:disable-next-line:no-implicit-dependencies
import * as ts from 'typescript';

// TODO: keep in sync with TypeScript
export enum ScriptKind {
  Unknown = 0,
  JS = 1,
  JSX = 2,
  TS = 3,
  TSX = 4,
  External = 5,
  JSON = 6,
  /**
   * Used on extensions that doesn't define the ScriptKind but the content defines it.
   * Deferred extensions are going to be included in all project contexts.
   */
  Deferred = 7
}

export interface TypeScriptInstance {
  parseJsonConfigFileContent: typeof ts.parseJsonConfigFileContent;
  readConfigFile: typeof ts.readConfigFile;
  createCompilerHost: typeof ts.createCompilerHost;
  createProgram: typeof ts.createProgram;
  flattenDiagnosticMessageText: typeof ts.flattenDiagnosticMessageText;
  resolveModuleName: typeof ts.resolveModuleName;
  createSourceFile: typeof ts.createSourceFile;
  sys: ts.System;
}

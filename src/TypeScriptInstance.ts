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
  parseJsonConfigFileContent(
    json: any,
    host: ts.ParseConfigHost,
    basePath: string,
    existingOptions?: ts.CompilerOptions,
    configFileName?: string,
    resolutionStack?: ts.Path[],
    extraFileExtensions?: ReadonlyArray<ts.FileExtensionInfo>
  ): ts.ParsedCommandLine;
  readConfigFile(
    fileName: string,
    readFile: (path: string) => string | undefined
  ): {
    config?: any;
    error?: ts.Diagnostic;
  };
  createCompilerHost(
    options: ts.CompilerOptions,
    setParentNodes?: boolean
  ): ts.CompilerHost;
  createProgram(
    rootNames: ReadonlyArray<string>,
    options: ts.CompilerOptions,
    host?: ts.CompilerHost,
    oldProgram?: ts.Program,
    configFileParsingDiagnostics?: ReadonlyArray<ts.Diagnostic>
  ): ts.Program;
  flattenDiagnosticMessageText(
    messageText: string | ts.DiagnosticMessageChain | undefined,
    newLine: string
  ): string;
  resolveModuleName(
    moduleName: string,
    containingFile: string,
    compilerOptions: ts.CompilerOptions,
    host: ts.ModuleResolutionHost,
    cache?: ts.ModuleResolutionCache
  ): ts.ResolvedModuleWithFailedLookupLocations;
  createSourceFile(
    fileName: string,
    sourceText: string,
    languageVersion: ts.ScriptTarget,
    setParentNodes?: boolean,
    scriptKind?: ts.ScriptKind
  ): ts.SourceFile;

  sys: ts.System;
}

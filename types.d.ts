declare interface AsyncWebAssemblyModulesPluginOptions {
	/**
	 * mangle imports
	 */
	mangleImports?: boolean;
  
  /**
   * Example function
   * @param a - First parameter
   * @param b - Second parameter
   * @returns Promise with video color primaries
   * @example
   * func(undefined, "example").then(result => console.log(result));
   */
  func(a: void, b: string): Promise<AsyncWebAssemblyModulesPluginOptions>
}
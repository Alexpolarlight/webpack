const { CSSURLDependency, CSSImportDependency } = require("./dependencies");

class CSSDependencyPlugin {
	constructor(options) {
		this.plugin = "CSSDependencyPlugin";
		this.options = options;
	}

	apply(compiler) {
		const { plugin } = this;
		const { compilation } = compiler.hooks;

		compilation.tap(plugin, (compilation, { normalModuleFactory }) => {
			const { dependencyFactories, dependencyTemplates } = compilation;

			dependencyFactories.set(CSSURLDependency, normalModuleFactory);
			dependencyFactories.set(CSSImportDependency, normalModuleFactory);

			dependencyTemplates.set(
				CSSImportDependency,
				new CSSImportDependency.Template()
			);
		});
	}
}

module.exports = CSSDependencyPlugin;

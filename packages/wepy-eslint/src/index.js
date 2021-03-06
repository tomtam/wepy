import eslint from 'eslint';
import formatter from 'eslint-friendly-formatter';

export default function (esConfig, filepath) {
    if (!esConfig.formatter) {
        esConfig.formatter = formatter;
    }
    const engine = new eslint.CLIEngine(esConfig);
    const report = engine.executeOnFiles([filepath]);
    const formatter = engine.getFormatter();
    console.log(formatter(report.results));
};

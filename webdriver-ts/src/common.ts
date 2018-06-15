export interface JSONResult {
    framework: string, benchmark: string, type: string, min: number,
        max: number, mean: number, geometricMean: number,
        standardDeviation: number, median: number, values: Array<number>
}

export interface BenchmarkError {
    imageFile : string;
    exception : string
}

export interface ErrorsAndWarning {
    errors: BenchmarkError[];
    warnings: String[];
}

export interface BenchmarkOptions {
    outputDirectory: string;
    port: string;
    headless?: boolean;
    chromeBinaryPath?: string;
    numIterationsForAllBenchmarks: number;
}

export let config = {
    PORT: 8080,
    REPEAT_RUN: 10,
    DROP_WORST_RUN: 0,
    WARMUP_COUNT: 5,
    TIMEOUT: 60 * 1000,
    LOG_PROGRESS: true,
    LOG_DETAILS: false,
    LOG_DEBUG: false,
    LOG_TIMELINE: false,
    EXIT_ON_ERROR: false,
    STARTUP_DURATION_FROM_EVENTLOG: true,
    STARTUP_SLEEP_DURATION: 1000,
    FORK_CHROMEDRIVER: true
}

export interface FrameworkData {
    name: string;
    uri: string;
    keyed: boolean;
    useShadowRoot: boolean;
}

interface Options {
    uri: string;
    useShadowRoot? : boolean;
}

function f(name: string, keyed: boolean, options: Options = {uri: null, useShadowRoot: false}): FrameworkData {
    let ret = {name, keyed, uri: 'frameworks/' + (options.uri ? options.uri : name), useShadowRoot: options.useShadowRoot};
    return ret;
}

export let frameworks = [
    f("binding.scala-v10.0.1-keyed", true, {uri: "binding.scala-v10.0.1-keyed/target/web/stage"}),
    f("binding.scala-v10.0.3-keyed", true, {uri: "binding.scala-v10.0.3-keyed/target/web/stage"}),
    f("binding.scala-v11.0.1-keyed", true, {uri: "binding.scala-v11.0.1-keyed/target/web/stage"}),
    f("binding.scala-v11.0.1-scala-v2.12-keyed", true, {uri: "binding.scala-v11.0.1-scala-v2.12-keyed/target/web/stage"}),
    f("react-v16.1.0-redux-v3.7.2-keyed", true),
    f("vanillajs-keyed", true)
]

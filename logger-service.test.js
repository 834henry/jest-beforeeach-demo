describe("Logger Service Tests", () => {
  let consoleLogSpy;
  let consoleErrorSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  test("should log info messages", () => {
    const logger = { info: (msg) => console.log(`INFO: ${msg}`) };
    logger.info("Test message");

    expect(consoleLogSpy).toHaveBeenCalledWith("INFO: Test message");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should log error messages", () => {
    const logger = { error: (msg) => console.error(`ERROR: ${msg}`) };
    logger.error("Test error");

    expect(consoleErrorSpy).toHaveBeenCalledWith("ERROR: Test error");
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
  });
});

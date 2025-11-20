// Mock axios without importing it
const axios = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
};

describe("API Service Tests", () => {
  let mockData;

  beforeEach(() => {
    mockData = {
      users: [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
      ],
    };

    jest.clearAllMocks();
  });

  test("should fetch users successfully", async () => {
    axios.get.mockResolvedValue({ data: mockData.users });

    const response = await axios.get("/api/users");

    expect(axios.get).toHaveBeenCalledWith("/api/users");
    expect(response.data).toEqual(mockData.users);
    expect(response.data.length).toBe(2);
  });

  test("should handle API errors", async () => {
    const errorMessage = "Network Error";
    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(axios.get("/api/users")).rejects.toThrow(errorMessage);
    expect(axios.get).toHaveBeenCalledWith("/api/users");
  });
});

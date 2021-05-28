import { AxiosHttpClient } from "./axios-http-client";
import axios from "axios";
import faker from "faker";
import { HttpPostParams } from "@/data/protocols/http";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement(),
});

describe("AxioshttpClient", () => {
  test("Should call axios with correct URL and verb", async () => {
    const sut = makeSut();
    const request = mockPostRequest();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url);
  });
});

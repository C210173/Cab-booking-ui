export const API_BASE_URL = "http://localhost:5454/api";
import { TextDecoder, TextEncoder } from "text-encoding-utf-8";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

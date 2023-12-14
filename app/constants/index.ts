//@types
import { REQUEST_STATUS } from "@types";

export const PAGE_SISE = 10;

export const REQUEST_STATUS_OPTIONS = [
  { label: REQUEST_STATUS.DRAFT, value: REQUEST_STATUS.DRAFT },
  { label: REQUEST_STATUS.PENDING, value: REQUEST_STATUS.PENDING },
  { label: REQUEST_STATUS.COMPLETE, value: REQUEST_STATUS.COMPLETE },
];

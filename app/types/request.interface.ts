//@types
import { REQUEST_STATUS } from "@types";

export interface Request {
  id: string;
  status: REQUEST_STATUS;
  item: string;
  createdAt: string;
}

export interface GetRequestsResponse {
  totalPagesCount: number;
  requests: Request[];
  totalRequestsCount: number;
}

export interface RequestFilter {
  page?: number;
  requestId?: string;
  requestStatus?: REQUEST_STATUS;
}

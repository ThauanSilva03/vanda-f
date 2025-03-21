/**
 * Generated by orval v7.6.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */
import { apiClient as axios } from "@/api/axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

import type { SearchSearchGetParams } from "./schemas";

export const getFastAPI = () => {
  /**
   * @summary Search
   */
  const searchSearchGet = <TData = AxiosResponse<unknown>>(
    params: SearchSearchGetParams,
    options?: AxiosRequestConfig
  ): Promise<TData> => {
    return axios.get(`/search/`, {
      ...options,
      params: { ...params, ...options?.params },
    });
  };

  /**
   * @summary Snp Page
   */
  const snpPageSnpSnpIdGet = <TData = AxiosResponse<unknown>>(
    snpId: string,
    options?: AxiosRequestConfig
  ): Promise<TData> => {
    return axios.get(`/snp/${snpId}`, options);
  };

  /**
   * @summary Gene Page
   */
  const genePageGeneGeneIdGet = <TData = AxiosResponse<unknown>>(
    geneId: string,
    options?: AxiosRequestConfig
  ): Promise<TData> => {
    return axios.get(`/gene/${geneId}`, options);
  };

  /**
   * @summary Health
   */
  const healthHealthGet = <TData = AxiosResponse<unknown>>(
    options?: AxiosRequestConfig
  ): Promise<TData> => {
    return axios.get(`/health`, options);
  };

  return {
    searchSearchGet,
    snpPageSnpSnpIdGet,
    genePageGeneGeneIdGet,
    healthHealthGet,
  };
};
export type SearchSearchGetResult = AxiosResponse<unknown>;
export type SnpPageSnpSnpIdGetResult = AxiosResponse<unknown>;
export type GenePageGeneGeneIdGetResult = AxiosResponse<unknown>;
export type HealthHealthGetResult = AxiosResponse<unknown>;

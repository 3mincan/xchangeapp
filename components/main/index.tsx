/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useQuery } from "react-query";
import baseURL from "../../pages/api/hello";
import Image from "next/image";
import "tailwindcss/tailwind.css";

const flagIcon = (icon) => {
  return `/../public/assets/square-flags/${icon}.svg`;
};

export const Main = () => {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    fetch(baseURL).then((res) => res.json())
  );

  return isLoading ? (
    <div>"Loading..."</div>
  ) : error ? (
    <div>`An error has occurred: ${error}`</div>
  ) : (
    <div className="container mx-auto">
      {console.log(data)}
      <p>{data.description}</p>
      <div className="">{isFetching ? "Updating..." : ""}</div>
      <div className="relative overflow-hidden mb-8">
        <div className="rounded-t-xl overflow-hidden p-10">
          <div className="grid gap-4 grid-cols-3 rounded-md">
            <div className="rounded-md text-white text-2xl font-extrabold bg-white dark:bg-gray-800">
              <div className="flex justify-center items-center m-4">
                <div className="currency-flag currency-flag-usd currency-flag-lg"></div>
                <span className="px-4 flex justify-center items-center">
                  USD/TRY
                </span>
                <div className="currency-flag currency-flag-try currency-flag-lg"></div>
              </div>

              <span className="text-gray-600 dark:text-gray-300 text-center my-4 flex justify-center items-center">
                {(data.rates.TRY / data.rates.USD).toFixed(4)}
              </span>
            </div>
            <div className="rounded-md text-white text-2xl font-extrabold bg-white dark:bg-gray-800">
              <div className="flex justify-center items-center m-4">
                <div className="currency-flag currency-flag-eur currency-flag-lg"></div>

                <span className="px-4 flex justify-center items-center">
                  {data.base}/TRY
                </span>
                <div className="currency-flag currency-flag-try currency-flag-lg"></div>
              </div>

              <span className="text-gray-600 dark:text-gray-300 text-center my-4 flex justify-center items-center">
                {data.rates.TRY.toFixed(4)}
              </span>
            </div>
            <div className="rounded-md text-white text-2xl font-extrabold bg-white dark:bg-gray-800">
              <div className="flex justify-center items-center m-4">
                <div className="currency-flag currency-flag-gbp currency-flag-lg"></div>

                <span className="px-4 flex justify-center items-center">
                  GBP/TRY
                </span>
                <div className="currency-flag currency-flag-try currency-flag-lg"></div>
              </div>

              <span className="text-gray-600 dark:text-gray-300 text-center my-4 flex justify-center items-center">
                {(data.rates.TRY / data.rates.GBP).toFixed(4)}
              </span>
            </div>
            <div className="rounded-md text-white text-2xl font-extrabold bg-white dark:bg-gray-800">
              <div className="flex justify-center items-center m-4">
                <div className="currency-flag currency-flag-eur currency-flag-lg"></div>

                <span className="px-4 flex justify-center items-center">
                  {data.base}/USD
                </span>
                <div className="currency-flag currency-flag-usd currency-flag-lg"></div>
              </div>

              <span className="text-gray-600 dark:text-gray-300 text-center my-4 flex justify-center items-center">
                {data.rates.USD.toFixed(4)}
              </span>
            </div>
            <div className="rounded-md text-white text-2xl font-extrabold bg-white dark:bg-gray-800">
              <div className="flex justify-center items-center m-4">
                <div className="currency-flag currency-flag-eur currency-flag-lg"></div>

                <span className="px-4 flex justify-center items-center">
                  {data.base}/JPY
                </span>
                <div className="currency-flag currency-flag-jpy currency-flag-lg"></div>
              </div>

              <span className="text-gray-600 dark:text-gray-300 text-center my-4 flex justify-center items-center">
                {data.rates.JPY.toFixed(4)}
              </span>
            </div>
            <div className="rounded-md text-white text-2xl font-extrabold bg-white dark:bg-gray-800">
              <div className="flex justify-center items-center m-4">
                <div className="currency-flag currency-flag-eur currency-flag-lg"></div>

                <span className="px-4 flex justify-center items-center">
                  {data.base}/NOK
                </span>
                <div className="currency-flag currency-flag-nok currency-flag-lg"></div>
              </div>

              <span className="text-gray-600 dark:text-gray-300 text-center my-4 flex justify-center items-center">
                {data.rates.NOK.toFixed(4)}
              </span>
            </div>
            <div className="rounded-md text-white text-2xl font-extrabold bg-white dark:bg-gray-800">
              <div className="flex justify-center items-center m-4">
                <div className="currency-flag currency-flag-eur currency-flag-lg"></div>

                <span className="px-4 flex justify-center items-center">
                  {data.base}/NZD
                </span>
                <div className="currency-flag currency-flag-nzd currency-flag-lg"></div>
              </div>

              <span className="text-gray-600 dark:text-gray-300 text-center my-4 flex justify-center items-center">
                {data.rates.NZD.toFixed(4)}
              </span>
            </div>
            <div className="rounded-md text-white text-2xl font-extrabold bg-white dark:bg-gray-800">
              <div className="flex justify-center items-center m-4">
                <div className="currency-flag currency-flag-eur currency-flag-lg"></div>

                <span className="px-4 flex justify-center items-center">
                  {data.base}/CAD
                </span>
                <div className="currency-flag currency-flag-cad currency-flag-lg"></div>
              </div>

              <span className="text-gray-600 dark:text-gray-300 text-center my-4 flex justify-center items-center">
                {data.rates.CAD.toFixed(4)}
              </span>
            </div>
            <div className="rounded-md text-white text-2xl font-extrabold bg-white dark:bg-gray-800">
              <div className="flex justify-center items-center m-4">
                <div className="currency-flag currency-flag-eur currency-flag-lg"></div>

                <span className="px-4 flex justify-center items-center">
                  {data.base}/GBP
                </span>
                <div className="currency-flag currency-flag-gbp currency-flag-lg"></div>
              </div>

              <span className="text-gray-600 dark:text-gray-300 text-center my-4 flex justify-center items-center">
                {data.rates.GBP.toFixed(4)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

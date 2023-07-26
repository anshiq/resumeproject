"use client";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import Select from "react-select";
import {
  Table,
  TableFooter,
  TableCaption,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {};

function Boxes({}: Props) {
  const namePriceComponent = data.map((each, index) => {
    return (
      <div
        className="flex shadow-md bg-white p-2 grow px-9 border-black rounded-xl flex-row"
        key={index}
      >
        <div className="mr-3" id="icon">
          {each.icon}
        </div>
        <div className="font-thin">
          {each.name}
          <br />
          <span className="font-bold"> {each.price}</span>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="flex bg-transparent  rounded-xl gap-4  flex-row bg-red-50 w-[95%] p-4 justify-around ">
        {namePriceComponent}
      </div>
      <div className=" shadow-sm bg-white  rounded-xl p-4 flex-col flex gap-4  w-[95%] ">
        <TableBox />
      </div>
      <div className="rounded-xl gap-4  shadow-sm bg-white   flex flex-col  p-4 w-[95%]">
        <span className="font-bold"> Form Title</span>
        <span>
          Sed Tortor, sed velit rediculus ipsum Lorem ipsum dolor sit amet, qui
          minim labore.
        </span>
        <div className="flex flex-row gap-2">
          <button className="flex flex-row bg-amber-300 p-2 gap-1 shadow-gray-500 shadow-sm rounded-sm">
            <div>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_6383_362)">
                  <path d="M0 0H25V25H0V0Z" fill="#012169" />
                  <path
                    d="M25 0V3.125L15.7227 12.5L25 21.6309V25H21.7285L12.4023 15.8203L3.32031 25H0V21.6797L9.08203 12.5488L0 3.61328V0H3.02734L12.4023 9.17969L21.4844 0H25Z"
                    fill="white"
                  />
                  <path
                    d="M8.98438 15.8203L9.52148 17.4805L2.05078 25H0V24.8535L8.98438 15.8203ZM15.0391 15.2344L17.6758 15.625L25 22.8027V25L15.0391 15.2344ZM25 0L15.625 9.57031L15.4297 7.42188L22.7539 0H25ZM0 0.0488281L9.42383 9.27734L6.54297 8.88672L0 2.39258V0.0488281Z"
                    fill="#C8102E"
                  />
                  <path
                    d="M8.59375 0V25H16.4062V0H8.59375ZM0 8.59375V16.4062H25V8.59375H0Z"
                    fill="white"
                  />
                  <path
                    d="M0 10.1562V14.8438H25V10.1562H0ZM10.1562 0V25H14.8438V0H10.1562Z"
                    fill="#C8102E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6383_362">
                    <rect width="25" height="25" rx="3" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>England</div>
          </button>
          <button className="flex flex-row p-2 gap-1 shadow-gray-500 shadow-sm rounded-sm">
            <div>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_6383_50)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H25V25H0V0Z"
                    fill="#E30A17"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0312 12.8906C17.0312 16.3379 14.1846 19.1357 10.6787 19.1357C7.17285 19.1357 4.32617 16.3379 4.32617 12.8857C4.32617 9.43359 7.16797 6.64551 10.6738 6.64551C14.1797 6.64551 17.0361 9.43848 17.0361 12.8906H17.0312Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.3486 12.8906C17.3486 15.6494 15.0732 17.8857 12.2656 17.8857C9.45801 17.8857 7.1875 15.6494 7.1875 12.8906C7.1875 10.1318 9.45801 7.89551 12.2656 7.89551C15.0732 7.89551 17.3438 10.1318 17.3438 12.8906H17.3486Z"
                    fill="#E30A17"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.2666 9.9707L18.2178 12.2803L16.0596 12.8662L18.1836 13.623L18.1348 15.7373L19.5166 14.0869L21.6113 14.8096L20.4004 13.0371L21.875 11.2744L19.6094 11.8994L18.2666 9.9707Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6383_50">
                    <rect width="25" height="25" rx="3" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>{" "}
            <div>Turkey </div>
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-light">Label title</label>
          <input
            className="p-2 rounded-sm border border-black"
            placeholder="Placeholder Content"
            type="text"
          />
        </div>
        <div className="flex flex-row items-stretch gap-2 w-full">
          <div className="flex flex-col flex-grow gap-2 ">
            <label className="font-light">Label title</label>
            <Select
              className="border-black border rounded-sm"
              placeholder="Chose"
              options={options}
            />
          </div>
          <div className="flex flex-col flex-grow gap-2">
            <label className="font-light">Label title</label>
            <input
              className="p-2 rounded-sm border border-black"
              placeholder="Placeholder Content"
              type="text"
            />
          </div>
          <div className="flex flex-col flex-grow gap-2">
            <label className="font-light">Label title</label>
            <input
              className="p-2 rounded-sm border border-black"
              placeholder="Placeholder Content"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-row justify-around gap-2">
          <div className="flex flex-col  flex-grow gap-2  ">
            <label className="font-light">Label title</label>
            <input
              className="p-2 rounded-sm border border-black"
              placeholder="Placeholder Content"
              type="text"
            />
          </div>
          <div className="flex flex-col  flex-grow gap-2 ">
            <label className="font-light">Label title</label>
            <input
              className="p-2 rounded-sm border border-black"
              placeholder="Placeholder Content"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col  flex-grow gap-2 ">
          <label className="font-light "> type text here</label>
          <Textarea />
        </div>
      </div>
      <div className="gap-4 flex flex-row w-[95%]">
        <div className="gap-4 rounded-xl  p-4 shadow-sm bg-white  flex flex-col  grow-[3]">
          <div className="flex flex-col  flex-grow gap-2  ">
            <label className="font-light">Label title</label>
            <input
              className="p-2 rounded-sm border border-black"
              placeholder="Placeholder Content"
              type="text"
            />
          </div>
          <div className="flex flex-col  flex-grow gap-2  ">
            <label className="font-light">Label title</label>
            <Select
              className="border-black border rounded-sm"
              placeholder="Chose"
              options={options}
            />
          </div>

          <div className="gap-4 flex flex-row ">
            <div className="flex flex-col  flex-grow gap-2  ">
              <label className="font-light">Label title</label>
              <input
                className="p-2 rounded-sm border border-black"
                placeholder="Placeholder Content"
                type="text"
              />
            </div>
            <div className="flex flex-col  flex-grow gap-2  ">
              <label className="font-light">Label title</label>
              <Select
                className="border-black border rounded-sm"
                placeholder="Chose"
                options={options}
              />
            </div>
          </div>
          <div className="flex flex-col  flex-grow gap-2 ">
            <label className="font-light "> type text here</label>
            <Textarea />
          </div>
        </div>
        <div className="gap-2 flex flex-col  p-4 grow rounded-xl shadow-sm bg-white ">
          <div className="flex flex-col  flex-grow gap-2  ">
            <label className="font-light">Label title</label>
            <input
              className="p-2 rounded-sm border border-black"
              placeholder="Placeholder Content"
              type="text"
            />
          </div>
          <div className="flex flex-col  flex-grow gap-2  ">
            <label className="font-light">Label title</label>
            <Select
              className="border-black border rounded-sm"
              placeholder="Chose"
              options={options}
            />
          </div>
          <div className="flex flex-col  flex-grow gap-2 ">
            <label className="font-light "> type text here</label>
            <Textarea />
          </div>
          <button className="px-4 py-2 rounded-sm bg-blue-400"> Submit</button>
        </div>
      </div>
    </>
  );
}

const TableBox = () => {
  return (
    <>
      <div>
        <span className="font-bold text-xl">Head</span>
        <br />
        <span>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </span>
      </div>

      <table className="w-full border-black border">
        <thead>
          <tr className="bg-gray-400 hover:bg-gray-400 text-white">
            <th className="border-black text-black font-bold border h-12">
              Invoice
            </th>
            <th className="border-black text-black font-bold border h-12">
              Status
            </th>
            <th className="border-black text-black font-bold border h-12">
              Method
            </th>
            <th className="border-black text-black font-bold border h-12">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr
              className={index % 2 ? "" : "bg-gray-100"}
              key={invoice.invoice}
            >
              <td className="border-black border h-12">
                <div className="flex items-center justify-center">
                  {invoice.invoice}
                </div>
              </td>
              <td className="border-black border h-12">
                <div className="flex items-center justify-center">
                  {invoice.paymentStatus}
                </div>
              </td>
              <td className="border-black border h-12">
                <div className="flex items-center justify-center">
                  {invoice.paymentMethod}
                </div>
              </td>
              <td className="border-black border h-12">
                <div className="flex justify-around items-center">
                  <button className="grow">hi</button>
                  <button className="grow">hi</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mx-auto w-full flex gap-2 flex-row justify-center items-center ">
        <svg
          width="19"
          className="rotate-180 opacity-40"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 14L14 9.5L9.5 5" stroke="#262626" stroke-width="2" />
          <path d="M5 14L9.5 9.5L5 5" stroke="#262626" stroke-width="2" />
        </svg>
        {buttonNum.map((data) => {
          if (data === 3) {
            return (
              <button
                key={data}
                className="p-2  px-4 bg-blue-700 text-white rounded-sm border border-gray-700 "
              >
                {" "}
                {data}
              </button>
            );
          }
          return (
            <button
              key={data}
              className="p-2 border px-4 border-gray-700 rounded-sm "
            >
              {" "}
              {data}
            </button>
          );
        })}
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 14L14 9.5L9.5 5" stroke="#262626" stroke-width="2" />
          <path d="M5 14L9.5 9.5L5 5" stroke="#262626" stroke-width="2" />
        </svg>
      </div>
    </>
  );
};
const buttonNum = [1, 2, 3, 4, 5];

const data = [
  {
    name: "Anshik",
    price: "$1199",
    icon: (
      <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.25 9.375H3.75C3.25272 9.375 2.77581 9.57254 2.42417 9.92418C2.07254 10.2758 1.875 10.7527 1.875 11.25V18.75C1.87826 19.9105 2.2404 21.0416 2.91176 21.9882C3.58312 22.9349 4.53084 23.6507 5.625 24.0375V41.25C5.625 41.7473 5.82254 42.2242 6.17417 42.5758C6.52581 42.9275 7.00272 43.125 7.5 43.125H37.5C37.9973 43.125 38.4742 42.9275 38.8258 42.5758C39.1775 42.2242 39.375 41.7473 39.375 41.25V24.0375C40.4692 23.6507 41.4169 22.9349 42.0882 21.9882C42.7596 21.0416 43.1217 19.9105 43.125 18.75V11.25C43.125 10.7527 42.9275 10.2758 42.5758 9.92418C42.2242 9.57254 41.7473 9.375 41.25 9.375ZM28.125 13.125H31.875V18.75C31.875 19.2473 31.6775 19.7242 31.3258 20.0758C30.9742 20.4275 30.4973 20.625 30 20.625C29.5027 20.625 29.0258 20.4275 28.6742 20.0758C28.3225 19.7242 28.125 19.2473 28.125 18.75V13.125ZM20.625 13.125H24.375V18.75C24.375 19.2473 24.1775 19.7242 23.8258 20.0758C23.4742 20.4275 22.9973 20.625 22.5 20.625C22.0027 20.625 21.5258 20.4275 21.1742 20.0758C20.8225 19.7242 20.625 19.2473 20.625 18.75V13.125ZM13.125 13.125H16.875V18.75C16.875 19.2473 16.6775 19.7242 16.3258 20.0758C15.9742 20.4275 15.4973 20.625 15 20.625C14.5027 20.625 14.0258 20.4275 13.6742 20.0758C13.3225 19.7242 13.125 19.2473 13.125 18.75V13.125ZM7.5 20.625C7.00272 20.625 6.52581 20.4275 6.17417 20.0758C5.82254 19.7242 5.625 19.2473 5.625 18.75V13.125H9.375V18.75C9.375 19.2473 9.17746 19.7242 8.82582 20.0758C8.47419 20.4275 7.99728 20.625 7.5 20.625ZM26.25 39.375H18.75V35.625C18.75 34.6304 19.1451 33.6766 19.8484 32.9734C20.5516 32.2701 21.5054 31.875 22.5 31.875C23.4946 31.875 24.4484 32.2701 25.1516 32.9734C25.8549 33.6766 26.25 34.6304 26.25 35.625V39.375ZM35.625 39.375H30V35.625C30 33.6359 29.2098 31.7282 27.8033 30.3217C26.3968 28.9152 24.4891 28.125 22.5 28.125C20.5109 28.125 18.6032 28.9152 17.1967 30.3217C15.7902 31.7282 15 33.6359 15 35.625V39.375H9.375V24.0375C10.0642 23.7817 10.6999 23.4002 11.25 22.9125C12.2813 23.8349 13.6164 24.3449 15 24.3449C16.3836 24.3449 17.7187 23.8349 18.75 22.9125C19.7813 23.8349 21.1164 24.3449 22.5 24.3449C23.8836 24.3449 25.2187 23.8349 26.25 22.9125C27.2813 23.8349 28.6164 24.3449 30 24.3449C31.3836 24.3449 32.7187 23.8349 33.75 22.9125C34.3 23.4002 34.9358 23.7817 35.625 24.0375V39.375ZM39.375 18.75C39.375 19.2473 39.1775 19.7242 38.8258 20.0758C38.4742 20.4275 37.9973 20.625 37.5 20.625C37.0027 20.625 36.5258 20.4275 36.1742 20.0758C35.8225 19.7242 35.625 19.2473 35.625 18.75V13.125H39.375V18.75ZM8.0625 5.625H37.5C37.9973 5.625 38.4742 5.42746 38.8258 5.07583C39.1775 4.72419 39.375 4.24728 39.375 3.75C39.375 3.25272 39.1775 2.77581 38.8258 2.42417C38.4742 2.07254 37.9973 1.875 37.5 1.875H8.0625C7.56522 1.875 7.08831 2.07254 6.73667 2.42417C6.38504 2.77581 6.1875 3.25272 6.1875 3.75C6.1875 4.24728 6.38504 4.72419 6.73667 5.07583C7.08831 5.42746 7.56522 5.625 8.0625 5.625Z"
          fill="#7C3AED"
        />
      </svg>
    ),
  },
  {
    name: "Anshik",
    price: "$1199",
    icon: (
      <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5625 11.25C6.19166 11.25 5.82915 11.36 5.52081 11.566C5.21246 11.772 4.97214 12.0649 4.83023 12.4075C4.68831 12.7501 4.65118 13.1271 4.72353 13.4908C4.79588 13.8545 4.97445 14.1886 5.23668 14.4508C5.4989 14.713 5.83299 14.8916 6.19671 14.964C6.56042 15.0363 6.93742 14.9992 7.28003 14.8573C7.62264 14.7154 7.91548 14.475 8.12151 14.1667C8.32753 13.8584 8.4375 13.4958 8.4375 13.125C8.4375 12.6277 8.23996 12.1508 7.88833 11.7992C7.5367 11.4475 7.05978 11.25 6.5625 11.25ZM14.0625 15H40.3125C40.8098 15 41.2867 14.8025 41.6383 14.4508C41.99 14.0992 42.1875 13.6223 42.1875 13.125C42.1875 12.6277 41.99 12.1508 41.6383 11.7992C41.2867 11.4475 40.8098 11.25 40.3125 11.25H14.0625C13.5652 11.25 13.0883 11.4475 12.7367 11.7992C12.385 12.1508 12.1875 12.6277 12.1875 13.125C12.1875 13.6223 12.385 14.0992 12.7367 14.4508C13.0883 14.8025 13.5652 15 14.0625 15ZM14.0625 20.625C13.6917 20.625 13.3291 20.735 13.0208 20.941C12.7125 21.147 12.4721 21.4399 12.3302 21.7825C12.1883 22.1251 12.1512 22.5021 12.2235 22.8658C12.2959 23.2295 12.4745 23.5636 12.7367 23.8258C12.9989 24.088 13.333 24.2666 13.6967 24.339C14.0604 24.4113 14.4374 24.3742 14.78 24.2323C15.1226 24.0904 15.4155 23.85 15.6215 23.5417C15.8275 23.2334 15.9375 22.8708 15.9375 22.5C15.9375 22.0027 15.74 21.5258 15.3883 21.1742C15.0367 20.8225 14.5598 20.625 14.0625 20.625ZM21.5625 30C21.1917 30 20.8291 30.11 20.5208 30.316C20.2125 30.522 19.9721 30.8149 19.8302 31.1575C19.6883 31.5001 19.6512 31.8771 19.7235 32.2408C19.7959 32.6045 19.9745 32.9386 20.2367 33.2008C20.4989 33.463 20.833 33.6416 21.1967 33.714C21.5604 33.7863 21.9374 33.7492 22.28 33.6073C22.6226 33.4654 22.9155 33.225 23.1215 32.9167C23.3275 32.6084 23.4375 32.2458 23.4375 31.875C23.4375 31.3777 23.24 30.9008 22.8883 30.5492C22.5367 30.1975 22.0598 30 21.5625 30ZM40.3125 20.625H21.5625C21.0652 20.625 20.5883 20.8225 20.2367 21.1742C19.885 21.5258 19.6875 22.0027 19.6875 22.5C19.6875 22.9973 19.885 23.4742 20.2367 23.8258C20.5883 24.1775 21.0652 24.375 21.5625 24.375H40.3125C40.8098 24.375 41.2867 24.1775 41.6383 23.8258C41.99 23.4742 42.1875 22.9973 42.1875 22.5C42.1875 22.0027 41.99 21.5258 41.6383 21.1742C41.2867 20.8225 40.8098 20.625 40.3125 20.625ZM40.3125 30H29.0625C28.5652 30 28.0883 30.1975 27.7367 30.5492C27.385 30.9008 27.1875 31.3777 27.1875 31.875C27.1875 32.3723 27.385 32.8492 27.7367 33.2008C28.0883 33.5525 28.5652 33.75 29.0625 33.75H40.3125C40.8098 33.75 41.2867 33.5525 41.6383 33.2008C41.99 32.8492 42.1875 32.3723 42.1875 31.875C42.1875 31.3777 41.99 30.9008 41.6383 30.5492C41.2867 30.1975 40.8098 30 40.3125 30Z"
          fill="#9333EA"
        />
      </svg>
    ),
  },
  {
    name: "Anshik",
    price: "$1199",
    icon: (
      <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.625 13.125H30V11.25C30 9.26088 29.2098 7.35322 27.8033 5.9467C26.3968 4.54018 24.4891 3.75 22.5 3.75C20.5109 3.75 18.6032 4.54018 17.1967 5.9467C15.7902 7.35322 15 9.26088 15 11.25V13.125H9.375C8.87772 13.125 8.40081 13.3225 8.04918 13.6742C7.69754 14.0258 7.5 14.5027 7.5 15V35.625C7.5 37.1168 8.09263 38.5476 9.14752 39.6025C10.2024 40.6574 11.6332 41.25 13.125 41.25H31.875C33.3668 41.25 34.7976 40.6574 35.8525 39.6025C36.9074 38.5476 37.5 37.1168 37.5 35.625V15C37.5 14.5027 37.3025 14.0258 36.9508 13.6742C36.5992 13.3225 36.1223 13.125 35.625 13.125ZM18.75 11.25C18.75 10.2554 19.1451 9.30161 19.8484 8.59835C20.5516 7.89509 21.5054 7.5 22.5 7.5C23.4946 7.5 24.4484 7.89509 25.1516 8.59835C25.8549 9.30161 26.25 10.2554 26.25 11.25V13.125H18.75V11.25ZM33.75 35.625C33.75 36.1223 33.5525 36.5992 33.2008 36.9508C32.8492 37.3025 32.3723 37.5 31.875 37.5H13.125C12.6277 37.5 12.1508 37.3025 11.7992 36.9508C11.4475 36.5992 11.25 36.1223 11.25 35.625V16.875H15V18.75C15 19.2473 15.1975 19.7242 15.5492 20.0758C15.9008 20.4275 16.3777 20.625 16.875 20.625C17.3723 20.625 17.8492 20.4275 18.2008 20.0758C18.5525 19.7242 18.75 19.2473 18.75 18.75V16.875H26.25V18.75C26.25 19.2473 26.4475 19.7242 26.7992 20.0758C27.1508 20.4275 27.6277 20.625 28.125 20.625C28.6223 20.625 29.0992 20.4275 29.4508 20.0758C29.8025 19.7242 30 19.2473 30 18.75V16.875H33.75V35.625Z"
          fill="#EA580C"
        />
      </svg>
    ),
  },
  {
    name: "Anshik",
    price: "$1199",
    icon: (
      <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.0625 22.9125C24.063 22.0465 24.8654 20.9754 25.4154 19.7719C25.9654 18.5684 26.25 17.2607 26.25 15.9375C26.25 13.4511 25.2623 11.0665 23.5041 9.30837C21.746 7.55022 19.3614 6.5625 16.875 6.5625C14.3886 6.5625 12.004 7.55022 10.2459 9.30837C8.48772 11.0665 7.5 13.4511 7.5 15.9375C7.49999 17.2607 7.78463 18.5684 8.33461 19.7719C8.88459 20.9754 9.68704 22.0465 10.6875 22.9125C8.06276 24.101 5.83587 26.0204 4.27309 28.441C2.7103 30.8617 1.87776 33.6812 1.875 36.5625C1.875 37.0598 2.07254 37.5367 2.42417 37.8883C2.77581 38.24 3.25272 38.4375 3.75 38.4375C4.24728 38.4375 4.72419 38.24 5.07583 37.8883C5.42746 37.5367 5.625 37.0598 5.625 36.5625C5.625 33.5788 6.81026 30.7173 8.92005 28.6075C11.0298 26.4978 13.8913 25.3125 16.875 25.3125C19.8587 25.3125 22.7202 26.4978 24.83 28.6075C26.9397 30.7173 28.125 33.5788 28.125 36.5625C28.125 37.0598 28.3225 37.5367 28.6742 37.8883C29.0258 38.24 29.5027 38.4375 30 38.4375C30.4973 38.4375 30.9742 38.24 31.3258 37.8883C31.6775 37.5367 31.875 37.0598 31.875 36.5625C31.8722 33.6812 31.0397 30.8617 29.4769 28.441C27.9141 26.0204 25.6872 24.101 23.0625 22.9125ZM16.875 21.5625C15.7625 21.5625 14.6749 21.2326 13.7499 20.6145C12.8249 19.9964 12.1039 19.1179 11.6782 18.0901C11.2524 17.0623 11.141 15.9313 11.3581 14.8401C11.5751 13.749 12.1109 12.7467 12.8975 11.96C13.6842 11.1734 14.6865 10.6376 15.7776 10.4206C16.8688 10.2035 17.9998 10.3149 19.0276 10.7407C20.0554 11.1664 20.9339 11.8874 21.552 12.8124C22.1701 13.7374 22.5 14.825 22.5 15.9375C22.5 17.4293 21.9074 18.8601 20.8525 19.915C19.7976 20.9699 18.3668 21.5625 16.875 21.5625ZM35.1375 22.1625C36.3374 20.8112 37.1213 19.142 37.3946 17.3556C37.668 15.5693 37.4192 13.742 36.6783 12.0938C35.9374 10.4455 34.7359 9.04649 33.2184 8.06517C31.7009 7.08384 29.9321 6.56202 28.125 6.5625C27.6277 6.5625 27.1508 6.76004 26.7992 7.11168C26.4475 7.46331 26.25 7.94022 26.25 8.4375C26.25 8.93478 26.4475 9.41169 26.7992 9.76333C27.1508 10.115 27.6277 10.3125 28.125 10.3125C29.6168 10.3125 31.0476 10.9051 32.1025 11.96C33.1574 13.0149 33.75 14.4457 33.75 15.9375C33.7473 16.9223 33.4862 17.8892 32.9926 18.7414C32.4991 19.5936 31.7904 20.3013 30.9375 20.7938C30.6595 20.9541 30.4273 21.1831 30.2632 21.4589C30.099 21.7347 30.0084 22.0479 30 22.3688C29.9922 22.6871 30.0655 23.0021 30.2131 23.2842C30.3607 23.5663 30.5778 23.8062 30.8438 23.9813L31.575 24.4688L31.8187 24.6C34.0789 25.672 35.9856 27.3675 37.3143 29.4868C38.6431 31.6062 39.3385 34.0611 39.3187 36.5625C39.3187 37.0598 39.5163 37.5367 39.8679 37.8883C40.2196 38.24 40.6965 38.4375 41.1937 38.4375C41.691 38.4375 42.1679 38.24 42.5196 37.8883C42.8712 37.5367 43.0687 37.0598 43.0687 36.5625C43.0841 33.6852 42.3634 30.8517 40.9753 28.3314C39.5871 25.811 37.5775 23.6875 35.1375 22.1625Z"
          fill="#059669"
        />
      </svg>
    ),
  },
];

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
export default Boxes;

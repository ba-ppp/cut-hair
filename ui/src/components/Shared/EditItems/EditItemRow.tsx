import React from "react";
import "twin.macro";
/** @jsxImportSource @emotion/react */

type EditItemRowProps = {
  item: any;
};

export const EditItemRow = (props: EditItemRowProps) => {
  const { item } = props;
  return (
    <tr tw="border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
      <td tw="py-3 px-6 text-left whitespace-nowrap">
        <div tw="flex items-center space-x-2 justify-center">
          <img
            tw="w-6 h-6 rounded-full"
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="avt"
          />
          <span tw="font-bold">{item?.name}</span>
        </div>
      </td>
      <td tw="py-3 px-6">
        <div tw="text-center font-medium">
          <span>{item?.position}</span>
        </div>
      </td>
      <td tw="py-3 px-6 text-center font-medium">
        <div>{item?.gender}</div>
      </td>
      <td tw="py-3 px-6 text-center font-medium">
        <div>{item?.contact}</div>
      </td>
      <td tw="py-3 px-6 text-center font-medium">
        <div>{item?.email}</div>
      </td>
      <td tw="py-3 px-6 text-center font-medium">
        <div>{item?.address}</div>
      </td>
      <td tw="py-3 px-6 text-center font-medium">
        <div>{item?.birthDay}</div>
      </td>
      <td tw="py-3 px-6 text-center font-medium">
        {item?.isActive ? (
          <span tw="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
            Active
          </span>
        ) : (
          <span tw="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
            Free
          </span>
        )}
      </td>
      <td tw="py-3 px-6 text-center font-medium">
        <div>{item?.salary}$</div>
      </td>
      <td tw="py-3 px-6 text-center">
        <div tw="flex items-center justify-center">
          <div tw="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
          <div tw="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </div>
          <div tw="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
      </td>
    </tr>
  );
};

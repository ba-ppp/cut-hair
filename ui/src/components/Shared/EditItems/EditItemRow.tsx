/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as Delete } from "assets/Icons/delete.svg";
import { Baber } from "model/util.model";
import React, { useEffect, useRef, useState } from "react";
import { useClickAway, useEffectOnce, useToggle } from "react-use";
import "twin.macro";
import tw from "twin.macro";

type EditItemRowProps = {
  item?: any;
  handleDelete: (id: string) => void;
  handleEditItem: (id: string, value: Baber) => void;
  isAddItem?: boolean;
};

export const EditItemRow = (props: EditItemRowProps) => {
  const { item, isAddItem } = props;
  const [isEditName, toggleEditName] = useToggle(false);
  const [isEditContact, toggleEditContact] = useToggle(false);
  const [isEditEmail, toggleEditEmail] = useToggle(false);
  const [isEditAddress, toggleEditAddress] = useToggle(false);
  const [isEditSalary, toggleEditSalary] = useToggle(false);
  const [isEditBirthDay, toggleEditBirthDay] = useToggle(false);

  const [data, setData] = useState<Baber>(item);

  const position = ["employee", "manager"];
  const gender = ["male", "female"];

  useEffectOnce(() => {
    if (isAddItem) {
      toggleEditName(true);
    }
  })

  const rowRef = useRef(null);

  const resetEdit = () => {
    toggleEditName(false);
    toggleEditAddress(false);
    toggleEditContact(false);
    toggleEditEmail(false);
    toggleEditSalary(false);
    toggleEditBirthDay(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      resetEdit();
    }
  };

  useEffect(() => {
    props.handleEditItem(item.id, data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useClickAway(rowRef, () => {
    resetEdit();
  });

  return (
    <tr
      tw="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
      ref={rowRef}
    >
      <td tw="py-1 px-6 text-left whitespace-nowrap width[20%]" onClick={() => toggleEditName(true)}>
        <div
          tw="flex items-center space-x-2 justify-start"
          
        >
          {item?.avt && <img
            tw="w-6 h-6 rounded-full object-center object-cover"
            src={item?.avt}
            alt="avt"
          />}
          {isEditName ? (
            <input
              onKeyDown={handleKeyDown}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              css={inputStyle}
              value={data?.name}
              type="text"
              placeholder="Name"
              autoFocus
            />
          ) : (
            <span tw="font-bold">{data?.name}</span>
          )}
        </div>
      </td>
      <td tw="py-3 px-6 width[10%]">
        <div
          tw="text-center font-medium"
          onClick={() => {
            if (data?.position === position[0]) {
              setData({ ...data, position: position[1] });
            } else {
              setData({ ...data, position: position[0] });
            }
          }}
        >
           {data?.position === position[1] ? (
          <span tw="bg-indigo-200 text-indigo-600 py-1 px-3 rounded-full text-xs">
            {position[1]}
          </span>
        ) : (
          <span tw="bg-gray-200 text-gray-600 py-1 px-3 rounded-full text-xs">
                        {position[0]}

          </span>
        )}
        </div>
      </td>
      <td
        tw="py-3 px-6 text-center font-medium width[10%]"
        onClick={() => {
          if (data?.gender === gender[0]) {
            setData({ ...data, gender: gender[1] });
          } else {
            setData({ ...data, gender: gender[0] });
          }
        }}
      >
        {data?.gender === gender[0] ? (
          <span tw="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
            {gender[0]}
          </span>
        ) : (
          <span tw="bg-blue-200 text-blue-600 py-1 px-3 rounded-full text-xs">
            {gender[1]}
          </span>
        )}
      </td>
      <td
        tw="py-1 px-6 text-center font-medium"
        onClick={() => toggleEditContact(true)}
      >
        {isEditContact ? (
          <input
            onKeyDown={handleKeyDown}
            onChange={(e) => setData({ ...data, contact: e.target.value })}
            css={inputStyle}
            value={data?.contact}
            placeholder="Contact"
            type="number"
            autoFocus
          />
        ) : (
          <span tw="font-bold">{data?.contact}</span>
        )}
      </td>
      <td
        tw="py-3 px-6 text-center font-medium lowercase"
        onClick={() => toggleEditEmail(true)}
      >
        {isEditEmail ? (
          <input
            onKeyDown={handleKeyDown}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            css={inputStyle}
            value={data?.email}
            placeholder="Email"
            type="text"
            autoFocus
          />
        ) : (
          <span tw="font-bold">{data?.email}</span>
        )}
      </td>
      <td
        tw="py-3 px-6 text-center font-medium"
        onClick={() => toggleEditAddress(true)}
      >
        {isEditAddress ? (
          <input
            onKeyDown={handleKeyDown}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            css={inputStyle}
            value={data?.address}
            placeholder="Address"
            type="text"
            autoFocus
          />
        ) : (
          <span tw="font-bold">{data?.address}</span>
        )}
      </td>
      <td
        tw="py-3 px-6 text-center font-medium"
        onClick={() => toggleEditBirthDay(true)}
      >
        {isEditBirthDay ? (
          <input
            onKeyDown={handleKeyDown}
            onChange={(e) => setData({ ...data, birthDay: e.target.value })}
            css={inputStyle}
            value={data?.birthDay}
            placeholder="Birthday"
            type="date"
            autoFocus
          />
        ) : (
          <span tw="font-bold">{data?.birthDay}</span>
        )}
      </td>
      <td
        tw="py-3 px-6 text-center font-medium"
        onClick={() => {
          if (data?.isActive) {
            setData({ ...data, isActive: false });
          } else {
            setData({ ...data, isActive: true });
          }
        }}
      >
        {data?.isActive ? (
          <span tw="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
            Active
          </span>
        ) : (
          <span tw="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
            Free
          </span>
        )}
      </td>
      <td
        tw="py-3 px-6 text-center font-medium"
        onClick={() => toggleEditSalary(true)}
      >
        {isEditSalary ? (
          <input
            onKeyDown={handleKeyDown}
            onChange={(e) =>
              setData({ ...data, salary: parseInt(e.target.value) })
            }
            css={inputStyle}
            value={data?.salary}
            placeholder="Salary"
            type="number"
            autoFocus
          />
        ) : (
          <span tw="font-bold">{data?.salary}$</span>
        )}
      </td>
      <td
        tw="py-3 px-6 text-center hover:text-red-500"
        onClick={() => props.handleDelete(item.id)}
      >
        <div tw="flex items-center justify-center">
          <div tw="w-4 mr-2 transform hover:scale-110">
            <Delete />
          </div>
        </div>
      </td>
    </tr>
  );
};

export const inputStyle = css`
  ${tw`px-2 py-2 border border-gray-400 appearance-none rounded w-10/12 focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600`}
`;

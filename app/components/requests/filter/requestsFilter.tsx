//@components
import { Input, RequestFilter, Select } from "@components";
import { Table } from "@tanstack/react-table";

//@constants
import { REQUEST_STATUS_OPTIONS } from "@constants";

//@hooks
import React, { useState } from "react";

//@types
import { REQUEST_COLUMN_DEFINITION, REQUEST_STATUS, Request } from "@types";

interface RequestsFilterProps {
  className?: string;
  table: Table<Request>;
  appliedRequestId: string;
  appliedRequestStatus: REQUEST_STATUS;
}

/**
 * Returns filter components
 * @returns JSX.Element
 */
export const RequestsFilter: React.FC<RequestsFilterProps> = ({
  table,
  appliedRequestId,
  appliedRequestStatus,
}) => {
  const [filterModel, setFilterModel] = React.useState({
    status: "",
    requestId: "",
  });

  const [openedModal, setOpenedModal] = useState<"state" | "requestId" | null>(
    null,
  );

  const handleApplyStatusFilter = () => {
    table
      .getColumn(REQUEST_COLUMN_DEFINITION.STATUS)
      ?.setFilterValue(filterModel.status);

    setOpenedModal(null);
  };

  const handleApplyRequestIdFilter = async () => {
    table
      .getColumn(REQUEST_COLUMN_DEFINITION.ID)
      ?.setFilterValue(
        filterModel.requestId ? filterModel.requestId : undefined,
      );

    setOpenedModal(null);
  };

  const handleDeleteStatusFilter = () => {
    table
      .getColumn(REQUEST_COLUMN_DEFINITION.STATUS)
      ?.setFilterValue(undefined);

    setFilterModel((prev) => ({
      ...prev,
      status: "",
    }));
  };

  const handleDeleteRequestIdFilter = () => {
    table.getColumn(REQUEST_COLUMN_DEFINITION.ID)?.setFilterValue(undefined);

    setFilterModel((prev) => ({
      ...prev,
      requestId: "",
    }));
  };

  return (
    <div className="mb-2 flex space-x-2">
      <RequestFilter
        fieldTitle="State"
        fieldValue={appliedRequestStatus}
        filterComponent={
          <Select
            value={filterModel.status}
            onChange={(e) =>
              setFilterModel((prev) => ({
                ...prev,
                status: e.target.value,
              }))
            }
            options={REQUEST_STATUS_OPTIONS}
          />
        }
        handleAddClick={() => setOpenedModal("state")}
        handleDeleteClick={handleDeleteStatusFilter}
        handleApplyStatusFilter={handleApplyStatusFilter}
        isModalOpen={openedModal === "state"}
        onModalClose={() => setOpenedModal(null)}
      />

      <RequestFilter
        fieldTitle="Request ID"
        fieldValue={appliedRequestId}
        filterComponent={
          <Input
            value={filterModel.requestId}
            onChange={(e) =>
              setFilterModel((prev) => ({
                ...prev,
                requestId: e.target.value,
              }))
            }
          />
        }
        handleAddClick={() => setOpenedModal("requestId")}
        handleDeleteClick={handleDeleteRequestIdFilter}
        handleApplyStatusFilter={handleApplyRequestIdFilter}
        isModalOpen={openedModal === "requestId"}
        onModalClose={() => setOpenedModal(null)}
      />
    </div>
  );
};

export default RequestsFilter;

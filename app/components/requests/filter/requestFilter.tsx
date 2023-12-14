//@components
import {
  Button,
  FilterPill,
  Modal,
  ModalFooter,
  ModalTitle,
} from "@components";

interface RequestFilterProps {
  className?: string;
  fieldTitle: string;
  fieldValue: string;
  isModalOpen: boolean;
  filterComponent: JSX.Element;
  onModalClose: () => void;
  handleAddClick: () => void;
  handleDeleteClick: () => void;
  handleApplyStatusFilter: () => void;
}

/**
 * Returns filter components
 * @returns JSX.Element
 */
export const RequestFilter: React.FC<RequestFilterProps> = ({
  fieldTitle,
  fieldValue,
  isModalOpen,
  filterComponent,
  onModalClose,
  handleAddClick,
  handleDeleteClick,
  handleApplyStatusFilter,
}) => (
  <div className="relative">
    <FilterPill
      field={fieldTitle}
      value={fieldValue}
      handleAddClick={handleAddClick}
      handleDeleteClick={handleDeleteClick}
    />

    <Modal
      close={onModalClose}
      open={isModalOpen}
      wrapperClassName="top-[30px] left-0 absolute"
      disableBackdrop
    >
      <ModalTitle>Filter by {fieldTitle}</ModalTitle>
      <div className="my-4 flex flex-row items-center justify-between gap-2">
        <label className="text-gray-light w-max text-sm font-normal leading-[100%]">
          Is equal to:
        </label>
        {filterComponent}
      </div>
      <ModalFooter>
        <Button
          fullWidth
          onClick={handleApplyStatusFilter}
          className="bg-sky-blue text-white"
        >
          Apply
        </Button>
      </ModalFooter>
    </Modal>
  </div>
);

export default RequestFilter;

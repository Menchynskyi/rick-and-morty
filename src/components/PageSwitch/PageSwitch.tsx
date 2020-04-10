import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { PageSwitchContainer, Button } from './PageSwitchStyled';
import { scrollToTop } from '../../utils';

type PageSwitchProps = {
  page: number;
  setPage: (page: number) => void;
  allPages: number;
};

export const PageSwitch: React.FC<PageSwitchProps> = ({
  page,
  setPage,
  allPages,
}) => {
  const switchToNextPage = (currentPage: number) => {
    if (currentPage < allPages) {
      scrollToTop();
      setPage(currentPage + 1);
    }
  };
  const switchToPrevPage = (currentPage: number) => {
    if (currentPage > 1) {
      scrollToTop();
      setPage(currentPage - 1);
    }
  };
  const isFirstPage = page === 1;
  const isLastPage = page === allPages;

  return (
    <PageSwitchContainer>
      <Button
        disabled={isFirstPage}
        type="button"
        onClick={() => switchToPrevPage(page)}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </Button>
      <Button
        disabled={isLastPage}
        type="button"
        onClick={() => switchToNextPage(page)}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </Button>
    </PageSwitchContainer>
  );
};

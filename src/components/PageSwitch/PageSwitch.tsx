import React from 'react';
import {
  PageSwitchContainer,
  PrevButton,
  NextButton,
} from './PageSwitchStyled';
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
      {!isFirstPage && (
        <PrevButton
          fullWidth={isLastPage}
          type="button"
          onClick={() => switchToPrevPage(page)}
        >
          Prev Page
        </PrevButton>
      )}
      {!isLastPage && (
        <NextButton
          fullWidth={isFirstPage}
          type="button"
          onClick={() => switchToNextPage(page)}
        >
          Next Page
        </NextButton>
      )}
    </PageSwitchContainer>
  );
};

import { toast } from 'react-toastify';

export const notFindMessage = () => {
  toast.warning("Sorry, we didn't find matches.", {
    position: toast.POSITION.TOP_RIGHT,
  });
};
export const findMessage = number => {
  toast.info(`We find ${number} movies`, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const errorMessage = () => {
  toast.error('Sorry something go wrong!', {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const noQueryMessage = () => {
  toast.warning('Enter a new serch word, please!', {
    position: toast.POSITION.TOP_RIGHT,
  });
};

import React, { useContext } from "react";
import Spinner from "../spinner/spinner";
import Context from "@/presentation/contexts/form/form-context";

import Styles from "./form-status-styles.scss";

const FormStatus = () => {
  const { isLoading, errorMessage } = useContext(Context);
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorMessage && <span className={Styles.error}>{errorMessage}</span>}
    </div>
  );
};

export default FormStatus;

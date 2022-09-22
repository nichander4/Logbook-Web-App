import { useRef, useState } from "react";
import Wizard from "src/@core/components/wizard";
import { ArrowRight } from "react-feather";
import Address from "./steps-with-validation/Address";
import SocialLinks from "./steps-with-validation/SocialLinks";
import PersonalInfo from "./steps-with-validation/PersonalInfo";
import AccountDetails from "./steps-with-validation/AccountDetails";
import CustomForm from "./steps-with-validation/CustomForm";
import FormCustom from "./steps-with-validation/FormCustom";

const WizardHorizontal = () => {
  const [stepper, setStepper] = useState(null);
  const ref = useRef(null);

  const steps = [
    // {
    //   id: "account-details",
    //   title: "Account Details",
    //   subtitle: "Enter Your Account Details.",
    //   content: <AccountDetails stepper={stepper} type="wizard-horizontal" />,
    // },
    {
      id: "test-detail",
      title: "test Details",
      subtitle: "test.",
      content: <FormCustom stepper={stepper} type="wizard-horizontal" />,
    },
    {
      id: "document-detail",
      title: "Account Details",
      subtitle: "Enter Your Account Details.",
      content: <CustomForm stepper={stepper} type="wizard-horizontal" />,
    },

    // {
    //   id: "personal-info",
    //   title: "Document Details",
    //   subtitle: "Add Document Details",
    //   content: <PersonalInfo stepper={stepper} type="wizard-horizontal" />,
    // },
    {
      id: "step-address",
      title: "Address",
      subtitle: "Add Address",
      content: <Address stepper={stepper} type="wizard-horizontal" />,
    },
  ];

  return (
    <div className="horizontal-wizard">
      <Wizard instance={(el) => setStepper(el)} ref={ref} steps={steps} />
    </div>
  );
};

export default WizardHorizontal;

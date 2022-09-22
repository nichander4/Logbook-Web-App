import DocumentDetails from "components/Card/DocumentDetails";
import KanbanCard from "components/Card/KanbanCard";
import ListCard from "components/Card/List";
import UserInformationForm from "components/Form/UserInformationForm";
import { Col, Row } from "reactstrap";
import VerticalLayout from "src/@core/layouts/VerticalLayout";

const ProfilePage = () => {
  return (
    <div>
      <UserInformationForm />
    </div>
  );
};

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page) {
  return <VerticalLayout>{page}</VerticalLayout>;
};

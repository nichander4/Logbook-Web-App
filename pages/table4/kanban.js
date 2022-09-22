import KanbanCard from "components/Card/KanbanCard";
import TableFourKanbanLayout from "components/Layout/TableFourKanbanLayout";
import { useState } from "react";
import { Grid, List, Search } from "react-feather";
import {
  Button,
  ButtonGroup,
  Card,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import VerticalLayout from "src/@core/layouts/VerticalLayout";
import KanbanCollapsibleRow from "components/Table/KanbanCollapsibleRow";
import ReactPaginate from "react-paginate";

const TableFourKanbanPage = () => {
  const [activeView, setActiveView] = useState("grid");

  const data = [
    {
      title: "Title",
      theme: "Exploring Idea",
      byWho: [
        {
          img: "/images/portrait/small/avatar-s-9.jpg",
          imgHeight: 34,
          imgWidth: 34,
        },
        {
          content: "PI",
          color: "light-danger",
        },
        {
          img: "/images/portrait/small/avatar-s-14.jpg",
          imgHeight: 34,
          imgWidth: 34,
        },
        {
          img: "/images/portrait/small/avatar-s-7.jpg",
          imgHeight: 34,
          imgWidth: 34,
        },
        {
          content: "AL",
          color: "light-secondary",
        },
      ],
      risk: "Kesulitan dalam mendapat ahli di bidang yang dibutuhkan.",
      riskIndicator: [
        {
          title: "After Current Action",
          subtitle: "Medium",
        },
        {
          title: "After Treatment Plan",
          subtitle: "Medium",
        },
      ],
      currentAction: [
        {
          actionTitle: "Protective",
          actionList: [
            "Bekerja sama dengan praktisi, konsultan, lembaga penelitian dan kampus (dengan MoU)",
            "Mengikuti pameran dan seminar nasional & international untuk berdiskusi dengan ahli",
          ],
        },
        {
          actionTitle: "Preventive",
          actionList: [
            "Bekerja sama dengan praktisi, konsultan, lembaga penelitian dan kampus (dengan MoU)",
            "Mengikuti pameran dan seminar nasional & international untuk berdiskusi dengan ahli",
          ],
        },
      ],
    },
    {
      title: "Title",
      theme: "Exploring Idea",
      byWho: [
        {
          img: "/images/portrait/small/avatar-s-9.jpg",
          imgHeight: 34,
          imgWidth: 34,
        },
        {
          content: "PI",
          color: "light-danger",
        },
        {
          img: "/images/portrait/small/avatar-s-14.jpg",
          imgHeight: 34,
          imgWidth: 34,
        },
        {
          img: "/images/portrait/small/avatar-s-7.jpg",
          imgHeight: 34,
          imgWidth: 34,
        },
        {
          content: "AL",
          color: "light-secondary",
        },
      ],
      risk: "Kesulitan dalam mendapat ahli di bidang yang dibutuhkan.",
      riskIndicator: [
        {
          title: "After Current Action",
          subtitle: "Medium",
        },
        {
          title: "After Treatment Plan",
          subtitle: "Medium",
        },
      ],
      currentAction: [
        {
          actionTitle: "Protective",
          actionList: [
            "Bekerja sama dengan praktisi, konsultan, lembaga penelitian dan kampus (dengan MoU)",
            "Mengikuti pameran dan seminar nasional & international untuk berdiskusi dengan ahli",
          ],
        },
        {
          actionTitle: "Preventive",
          actionList: [
            "Bekerja sama dengan praktisi, konsultan, lembaga penelitian dan kampus (dengan MoU)",
            "Mengikuti pameran dan seminar nasional & international untuk berdiskusi dengan ahli",
          ],
        },
      ],
    },
    {
      title: "Title",
      theme: "Exploring Idea",
      byWho: [
        {
          img: "/images/portrait/small/avatar-s-9.jpg",
          imgHeight: 34,
          imgWidth: 34,
        },
        {
          content: "PI",
          color: "light-danger",
        },
        {
          img: "/images/portrait/small/avatar-s-14.jpg",
          imgHeight: 34,
          imgWidth: 34,
        },
        {
          img: "/images/portrait/small/avatar-s-7.jpg",
          imgHeight: 34,
          imgWidth: 34,
        },
        {
          content: "AL",
          color: "light-secondary",
        },
      ],
      risk: "Kesulitan dalam mendapat ahli di bidang yang dibutuhkan.",
      riskIndicator: [
        {
          title: "After Current Action",
          subtitle: "Medium",
        },
        {
          title: "After Treatment Plan",
          subtitle: "Medium",
        },
      ],
      currentAction: [
        {
          actionTitle: "Protective",
          actionList: [
            "Bekerja sama dengan praktisi, konsultan, lembaga penelitian dan kampus (dengan MoU)",
            "Mengikuti pameran dan seminar nasional & international untuk berdiskusi dengan ahli",
          ],
        },
        {
          actionTitle: "Preventive",
          actionList: [
            "Bekerja sama dengan praktisi, konsultan, lembaga penelitian dan kampus (dengan MoU)",
            "Mengikuti pameran dan seminar nasional & international untuk berdiskusi dengan ahli",
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <div className="d-flex justify-content-end mb-2">
        <InputGroup className="input-group-merge w-25 mr-2">
          <Input type="text" placeholder="Search" />
          <InputGroupAddon addonType="append">
            <InputGroupText>
              <Search size={14} className="" />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <ButtonGroup className="btn-group-toggle">
          <Button
            tag="label"
            className={`btn-icon view-btn grid-view-btn ${
              activeView === "grid" ? "active" : ""
            }`}
            color="primary"
            outline
            onClick={() => setActiveView("grid")}
          >
            <Grid size={18} />
          </Button>
          <Button
            tag="label"
            className={`btn-icon view-btn grid-view-btn ${
              activeView === "list" ? "active" : ""
            }`}
            color="primary"
            outline
            onClick={() => setActiveView("list")}
          >
            <List size={18} />
          </Button>
        </ButtonGroup>
      </div>
      {activeView === "grid" ? (
        <Row>
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
        </Row>
      ) : (
        <Card className="overflow-hidden pt-2">
          <KanbanCollapsibleRow data={data} />
          <div className="d-flex justify-content-between align-items-center py-2 px-3">
            <p className="mb-0" style={{ color: "#b9b9c3" }}>
              Showing 1 to 10 of 29 entries
            </p>
            <ReactPaginate
              pageCount="5"
              nextLabel={""}
              breakLabel={"..."}
              activeClassName={"active"}
              pageClassName={"page-item"}
              previousLabel={""}
              nextLinkClassName={"page-link"}
              nextClassName={"page-item next-item"}
              previousClassName={"page-item prev-item"}
              previousLinkClassName={"page-link"}
              pageLinkClassName={"page-link"}
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName={"pagination react-paginate m-0"}
            />
          </div>
        </Card>
      )}
    </div>
  );
};

export default TableFourKanbanPage;

TableFourKanbanPage.getLayout = function getLayout(page) {
  return (
    <VerticalLayout>
      <TableFourKanbanLayout>{page}</TableFourKanbanLayout>
    </VerticalLayout>
  );
};

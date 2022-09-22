import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input, CustomInput, Nav, NavItem, NavLink, TabContent, TabPane, Card, CardBody, Row } from 'reactstrap'

const CreateTabbedFeedback = ({ data, feedbackRole }) => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <>
      <Nav tabs className="nav-vuexy nav-vuexy-tabs">
        {data.map((data) => (
          <NavItem className="nav-vuexy-item">
            <NavLink
              active={selectedTab === data.stage}
              className="nav-vuexy-link font body-copy pt-0 pb-2"
              onClick={() => setSelectedTab(data.stage)}
            >{`Catatan ${feedbackRole[data.stage]}`}</NavLink>
          </NavItem>
        ))}
      </Nav>
      <div className="pt-2 pb-4 px-4">
        <TabContent activeTab={selectedTab}>
          {data.map((data) => (
            <TabPane tabId={data.stage}>
              <Input
                type="textarea"
                id="feedback"
                rows="5"
                value={data.notes}
                disabled
              />
            </TabPane>
          ))}
        </TabContent>
      </div>
    </>
  );
};

const TermsAndConditionsPopUp = () => {
  const [formModal, setFormModal] = useState(false)
  const [scrollModal, setScrollModal] = useState(false)
  const [scrollInnerModal, setScrollInnerModal] = useState(false)
  const [active, setActive] = useState("Indonesia");
  const toggleTab = (tab) => {
    active !== tab && setActive(tab);
  };

  return (
    <div className='demo-inline-spacing'>
      <Button color='primary' outline onClick={() => setScrollInnerModal(!scrollInnerModal)}>
        Terms and Conditions Pop Up
      </Button>
      <Modal scrollable className='modal-lg scrollableModalSize' isOpen={scrollInnerModal} toggle={() => setScrollInnerModal(!scrollInnerModal)}>
        <ModalHeader toggle={() => setScrollInnerModal(!scrollInnerModal)} cssModule={{'modal-title': 'w-100 text-center'}} className='modalHeaderTnCPopUp'>
          Terms and Conditions
        </ModalHeader>
        <ModalBody>
          <Card className="card-vuexy">
            <Nav tabs className="nav-vuexy nav-vuexy-tabs">
              <NavItem className="nav-vuexy-item">
                <NavLink
                  active={active === "Indonesia"}
                  className="nav-vuexy-link font body-copy py-2"
                  onClick={() => toggleTab("Indonesia")}
                >
                  Indonesia
                </NavLink>
              </NavItem>
              <NavItem className="nav-vuexy-item">
                <NavLink
                  active={active === "English"}
                  className="nav-vuexy-link font body-copy py-2"
                  onClick={() => toggleTab("English")}
                >
                  English
                </NavLink>
              </NavItem>
            </Nav>
            <CardBody className="card-vuexy-body">
              <TabContent activeTab={active}>
                <TabPane tabId="Indonesia"> 
                  <p>
                    Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder
                    pudding pastry.
                  </p>
                  <p>
                    Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
                    bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
                  </p>
                  <p>
                    Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
                    dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
                    marzipan muffin pie liquorice.
                  </p>
                  <p>
                    Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
                    pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
                    cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
                    fruitcake powder pudding pastry.
                  </p>
                  <p>
                    Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
                    bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
                  </p>
                  <p>
                    Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
                    dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
                    marzipan muffin pie liquorice.
                  </p>
                  <p>
                    Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
                    pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
                    cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
                    fruitcake powder pudding pastry.
                  </p>
                  <p>
                    Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
                    bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
                  </p>
                  <p>
                    Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
                    dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
                    marzipan muffin pie liquorice.
                  </p>
                  <p>
                    Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
                    pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
                    cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
                    fruitcake powder pudding pastry.
                  </p>
                  <p>
                    Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
                    bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
                  </p>
                  <p>
                    Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
                    dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
                    marzipan muffin pie liquorice.
                  </p>
                  <p>
                    Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
                    pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
                    cake soufflé halvah.
                  </p>
                </TabPane>
                <TabPane tabId="English">
                  <p>
                    Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder
                    pudding pastry.
                  </p>
                  <p>
                    Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
                    bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
                  </p>
                  <p>
                    Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
                    dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
                    marzipan muffin pie liquorice.
                  </p>
                  <p>
                    Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
                    pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
                    cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
                    fruitcake powder pudding pastry.
                  </p>
                  <p>
                    Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
                    bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
                  </p>
                  <p>
                    Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
                    dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
                    marzipan muffin pie liquorice.
                  </p>
                  <p>
                    Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
                    pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
                    cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
                    fruitcake powder pudding pastry.
                  </p>
                  <p>
                    Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
                    bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
                  </p>
                  <p>
                    Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
                    dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
                    marzipan muffin pie liquorice.
                  </p>
                  <p>
                    Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
                    pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
                    cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
                    fruitcake powder pudding pastry.
                  </p>
                  <p>
                    Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
                    bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
                  </p>
                  <p>
                    Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
                    dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
                    marzipan muffin pie liquorice.
                  </p>
                  <p>
                    Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
                    pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
                    cake soufflé halvah.
                  </p>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </ModalBody>
        <ModalFooter className='d-flex flex-row justify-content-center'>
          <FormGroup>
            <CustomInput inline type='checkbox' id='noBox' label='I have read and agree to the Terms and Conditions' />
          </FormGroup>
          <Button color='info' className='modalButtonTnCPopUp' onClick={() => setScrollInnerModal(!scrollInnerModal)}>
            AGREE AND CONTINUE
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
export default TermsAndConditionsPopUp

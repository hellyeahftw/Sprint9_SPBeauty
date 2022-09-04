// import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
  return (
    // <span class='border rounded color:#64748B'>
    <div className="d-inline-flex border flex-column gap-2 rounded flex-grow-1 justify-content-between col-6 color:#64748B p-3">
      <div className="d-flex flex-column gap-4">
        <div className="title ps-2">Адреса заведений</div>
        <div className="d-flex flex-column gap-3">
          <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
          <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
        </div>
      </div>
      <div className="d-inline-end align-self-start mt-auto p-2 bd-highlight">
        <SecondaryButton>Добавить филиал</SecondaryButton>{" "}
        {/*замена прайм на сек*/}
      </div>
    </div>
    // </span>
  );
}

export default Addresses;

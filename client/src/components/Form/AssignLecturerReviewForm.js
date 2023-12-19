import React, { useEffect, useState } from "react";
import userService from "../../services/userServices";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";
import thesisService from "../../services/thesisService";

const AssignLecturerReviewForm = ({
  currentLecturerId,
  currentThesis,
  setOpenAssignLecturerReview,
}) => {
  const [listLecturerReview, setListLecturerReview] = useState();
  const [adviser, setAdviser] = useState();
  const [formData, setFormData] = useState();
  const [selectedLecturer, setSelectedLecturer] = useState();
  const [selectedDate, setSelectedDate] = useState("");
  const handleLecturerSelecting = (e) => {
    setSelectedLecturer(e.target.value);
  };

  const onSubmit = async () => {
    setFormData({
      ...formData,
      panelists: [...formData.panelists, selectedLecturer],
    });
    formData["defenseDate"] = new Date(selectedDate);
    console.log(formData);
    const response = await thesisService.assignDefenseLecturer(
      formData._id,
      formData
    );
    console.log(response);
  };
  // get list lecturer reviews
  const loadPage = async () => {
    const listLecturer = await userService.getAllFaculty();
    // const adviser = listLecturer.find(
    //   (lecturer) => lecturer._id === currentLecturerId
    // );
    const thesis = await thesisService.getThesisById(currentThesis);
    const listLecturerExceptCurrent = listLecturer.filter(
      (lecturer) => lecturer._id !== currentLecturerId
    );

    const initialLecturer = listLecturerExceptCurrent[0]._id;
    setSelectedLecturer(initialLecturer);

    console.log(thesis);
    setFormData(thesis);
    setAdviser(thesis.adviser);
    // set defense date
    // setSelectedDate(dayjs(thesis.defenseDate));
    setListLecturerReview(listLecturerExceptCurrent);
  };
  useEffect(() => {
    loadPage();
  }, []);

  // show on select
  // current adviser  -  Lecturer review select -  date to reviews
  // current thesis

  return (
    <div
      className="fixed right-0 left-0 top-0 bottom-0 px-2 scrollbar-hide py-4 overflow-scroll z-50
        justify-center items-center flex bg-[#00000080] rounded-md"
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }

        setOpenAssignLecturerReview(false);
      }}
    >
      <div className="p-3 bg-blue-800 flex flex-col  rounded-md">
        <div className="p-3 bg-blue-800 flex justify-between items-center w-[700px] rounded-md text-white  ">
          <div className="flex flex-col space-y-3 ">
            <label>Adviser</label>
            <input
              className="text-black p-3"
              value={adviser?.firstName + " " + adviser?.lastName}
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label>Review Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd-MM-yyyy"
              minDate={new Date()}
              //maxDate={ new Date()}
              //filterDate={ date=>date.getDay()!=6 && date.getDay()!=0}
              // isClearable
              className="text-black p-3"
              showYearDropdown
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label>Lecturer Reviews</label>
            <select
              className=" p-3 px-5 text-black"
              onChange={handleLecturerSelecting}
            >
              {listLecturerReview?.map((lecturer) => (
                <option value={lecturer._id}>
                  {lecturer?.firstName + " " + lecturer?.lastName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <form className="w-full mx-auto mt-8 p-6 bg-white rounded-md shadow-md text-black">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-600"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData?.title}
                className="mt-1 p-3 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-600"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData?.description}
                className="mt-1 p-3 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="major"
                className="block text-sm font-medium text-gray-600"
              >
                Major
              </label>
              <input
                type="text"
                id="major"
                name="major"
                value={formData?.major.name}
                className="mt-1 p-3 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="students"
                className="block text-sm font-medium text-gray-600"
              >
                Students
              </label>
              <input
                type="text"
                id="students"
                name="students"
                value={formData?.authors?.length}
                className="mt-1 p-3 w-full border rounded-md"
              />
            </div>
          </form>
        </div>
        <div
          className="flex justify-end mt-4"
          onClick={() => {
            onSubmit();
          }}
        >
          <button className="bg-blue-500 text-white px-5 py-3 rounded-md hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignLecturerReviewForm;

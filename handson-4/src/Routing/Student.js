import React from "react";
import Navbar from "../navbar";

const Student = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <h1 className="student-headning">Student Details</h1>
        <button>Add New Student</button>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
        <tr>
          <td>John</td>
          <td>24</td>
          <td>MERN</td>
          <td>October</td>
          <td>
            <a href="">Edit </a>
          </td>
        </tr>
        <tr>
          <td>Doe</td>
          <td>25</td>
          <td>MERN</td>
          <td>November</td>
          <td>
            <a href="">Edit </a>
          </td>
        </tr>
        <tr>
          <td>Biden</td>
          <td>26</td>
          <td>MERN</td>
          <td>September</td>
          <td>
            <a href="">Edit </a>
          </td>
        </tr>
        <tr>
          <td>Barar</td>
          <td>22</td>
          <td>MERN</td>
          <td>September</td>
          <td>
            <a href="">Edit </a>
          </td>
        </tr>
        <tr>
          <td>christ</td>
          <td>23</td>
          <td>MERN</td>
          <td>October</td>
          <td>
            <a href="">Edit </a>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Student;

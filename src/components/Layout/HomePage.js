import { Button } from "react-bootstrap";
import "./Homepage.css";

const HomePage = () => {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">Generics</h1>
          <p class="card-text">This is a HOMEPAGE section</p>
        </div>
      </div>
      <br></br>
      <div>
        <h3 class="text">Tour Details</h3>
      </div>
      <br></br>
      <div>
        <table class="table">
          <tbody>
            <tr>
              <th scope="row">july 16</th>
              <td>Detroit</td>
              <td>Music theater</td>
              <td>
                <Button variant="success">Buy Tickets</Button>
              </td>
            </tr>
            <tr>
              <th scope="row">july 18</th>
              <td>NewYork</td>
              <td>Music theater</td>
              <td>
                <Button variant="success">Buy Tickets</Button>
              </td>
            </tr>
            <tr>
              <th scope="row">july 20</th>
              <td>Chicago</td>
              <td>Music theater</td>
              <td>
                <Button variant="success">Buy Tickets</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">Generics</h1>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default HomePage;

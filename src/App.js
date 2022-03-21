import React, { useState } from 'react';

import './style/App.css';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Stack,
  Table,
} from 'react-bootstrap';

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const listOption = numbers.map((number) => (
    <option value={number}>{number}</option>
  ));
  const [row, setRows] = useState(1);

  const table = document.querySelector('table');
  const [header] = table.tHead.rows;
  const props = [...header.cells].map((h) => h.textContent);
  const rows = [...table.rows].map((r) => {
    const entries = [...r.cells].map((c, i) => {
      return [props[i], c.textContent];
    });
    return Object.fromEntries(entries);
  });
  console.log(rows);

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(rows)
    )}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'data.json';

    link.click();
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className=" text-center my-5">Apliasi Penilaian Mahasiswa</h1>
        </Col>
      </Row>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(row)].map((elementInArray, index) => {
            return (
              <tr>
                <th scope="row">Mahasiswa {index + 1}</th>
                <td>
                  <Form.Select aria-label="Default select example">
                    {listOption}
                  </Form.Select>
                </td>
                <td>
                  <Form.Select aria-label="Default select example">
                    {listOption}
                  </Form.Select>
                </td>
                <td>
                  <Form.Select aria-label="Default select example">
                    {listOption}
                  </Form.Select>
                </td>
                <td>
                  <Form.Select aria-label="Default select example">
                    {listOption}
                  </Form.Select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Stack gap={2} className=" mt-3 col-md-3 mx-auto">
        <Button variant="success" onClick={() => setRows(row + 1)}>
          Tambah Mahasiswa
        </Button>
        <Button variant="danger" onClick={() => setRows(row - row + 1)}>
          Reset Tabel
        </Button>
        <Button variant="primary" onClick={exportData}>
          Simpan
        </Button>
      </Stack>
    </Container>
  );
}

export default App;

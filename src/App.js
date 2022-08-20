import React from 'react';
import Broly from './Video/Broly.mp4';
import Scanner from './Images/scanner.gif';
import Throw from './Images/vorikx.gif';
import Cleaning from './Images/cleaning.gif';
import Checklist from './Images/checklist.gif';
import Warehouse from './Images/warehouse.gif'
import './app.css';

function App() {
  return (
    <div>
    <div className='video-container'>
    <video autoPlay loop muted src={Broly} type='video/mp4' />
    <div className='text-container'>
    <h1 className='text-center'>Sensei David</h1>
    <h6 className='text-center'>HD Coach</h6>
    </div>
    <h4 className='text-center'>What I learned from sensei</h4>
    <i class="bi bi-arrow-down text-center"></i>
      <div class="container text-center">
  <div class="row gy-5">
    <div class="col-6">
      <button class="p-4 btn btn-dark" data-bs-toggle="modal" data-bs-target="#checklist">Do Your Checklist</button>
    </div>
    <div class="col-6">
      <button class="p-4 btn btn-dark" data-bs-toggle="modal" data-bs-target="#scanner">Scan</button>
    </div>
    <div class="col-6">
      <button class="p-4 btn btn-dark btn" data-bs-toggle="modal" data-bs-target="#stack">Stack Neatly</button>
    </div>
    <div class="col-6">
    <button class="p-4 btn btn-dark btn" data-bs-toggle="modal" data-bs-target="#clean">Keep It Clean</button>
    </div>
    <div>
    <button className=' long p-4 btn btn-dark' data-bs-toggle="modal" data-bs-target="#warehouse">After A Long Day</button>
    </div>
  </div>
  </div>

  <div class="modal fade" id="checklist" tabindex="-1" aria-labelledby="checklistModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="checklistModalLabel">Every fucking morning!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src={Checklist} />
      </div>
      </div>
      </div>
      </div>

  <div class="modal fade" id="scanner" tabindex="-1" aria-labelledby="scannerModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="scannerModalLabel">Scan constantly</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img src={Scanner} />
      </div>
      </div>
      </div>
      </div>


      <div class="modal fade" id="stack" tabindex="-1" aria-labelledby="stackModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="stackModalLabel">Stack em good</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src={Throw} />
      </div>
      </div>
      </div>
      </div>

      <div class="modal fade" id="clean" tabindex="-1" aria-labelledby="cleanModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="cleanModalLabel">Keep your area clean so you don't trip and die</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src={Cleaning} />
      </div>
      </div>
      </div>
      </div>

      <div class="modal fade" id="warehouse" tabindex="-1" aria-labelledby="warehouseModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="warehouseModalLabel">Celebrate!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src={Warehouse} />
      </div>
      </div>
      </div>
      </div>


    </div> 
  </div>


  );
}

export default App; 


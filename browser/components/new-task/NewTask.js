import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Hero extends Component {

  render () {
    return (
      <div className="jumbotron">
          <span className="item editable" id="new-job">
            <form action="/jobs" method="post" _lpchecked={1}>
              <div className="item_well">
                <input type="hidden" name="_csrf" defaultValue="E8q4K/Vddp3dkW6ZLeExrWxWCubEeiLAHZ95H7zoqOo=" />
                <div className="row row--rule">
                  <div className="col-md-12">
                    <div className="task">
                      <div className="input-group">
                        <span className="input-group-addon input--code" id="basic-addon1">$</span>
                        <input type="text" autofocus placeholder="rake do_something" className="form-control on-edit input--code" name="command" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-6">
                    <div className="dyno_size">
                      <h6>Dyno size</h6>
                      <select name="dyno_size" className="on-edit select-block"><option value={11}>Free</option></select>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-6">
                    <div className="frequency">
                      <h6>Frequency</h6>
                      <select name="every" className="interval on-edit select-block"><option value={1440}>Daily</option><option value={60}>Hourly</option><option value={10}>Every 10 minutes</option></select>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-6">
                    <div className="last-run">
                      <h6>Last run</h6>
                      <span className="timestamp">never</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-6">
                    <div className="next-run">
                      <h6>Next due</h6>
                      <span className="on-edit">
                        <span className="daily interval-1440">
                          <span className="date-segment">Apr 02</span>
                          <select name="at" className="daily"><option value={1230} data-date-segment="Apr 02">20:30</option><option value={1260} data-date-segment="Apr 02">21:00</option><option value={1290} data-date-segment="Apr 02">21:30</option><option value={1320} data-date-segment="Apr 02">22:00</option><option value={1350} data-date-segment="Apr 02">22:30</option><option value={1380} data-date-segment="Apr 02">23:00</option><option value={1410} data-date-segment="Apr 02">23:30</option><option disabled>-----</option><option value={0} data-date-segment="Apr 03">00:00</option><option value={30} data-date-segment="Apr 03">00:30</option><option value={60} data-date-segment="Apr 03">01:00</option><option value={90} data-date-segment="Apr 03">01:30</option><option value={120} data-date-segment="Apr 03">02:00</option><option value={150} data-date-segment="Apr 03">02:30</option><option value={180} data-date-segment="Apr 03">03:00</option><option value={210} data-date-segment="Apr 03">03:30</option><option value={240} data-date-segment="Apr 03">04:00</option><option value={270} data-date-segment="Apr 03">04:30</option><option value={300} data-date-segment="Apr 03">05:00</option><option value={330} data-date-segment="Apr 03">05:30</option><option value={360} data-date-segment="Apr 03">06:00</option><option value={390} data-date-segment="Apr 03">06:30</option><option value={420} data-date-segment="Apr 03">07:00</option><option value={450} data-date-segment="Apr 03">07:30</option><option value={480} data-date-segment="Apr 03">08:00</option><option value={510} data-date-segment="Apr 03">08:30</option><option value={540} data-date-segment="Apr 03">09:00</option><option value={570} data-date-segment="Apr 03">09:30</option><option value={600} data-date-segment="Apr 03">10:00</option><option value={630} data-date-segment="Apr 03">10:30</option><option value={660} data-date-segment="Apr 03">11:00</option><option value={690} data-date-segment="Apr 03">11:30</option><option value={720} data-date-segment="Apr 03">12:00</option><option value={750} data-date-segment="Apr 03">12:30</option><option value={780} data-date-segment="Apr 03">13:00</option><option value={810} data-date-segment="Apr 03">13:30</option><option value={840} data-date-segment="Apr 03">14:00</option><option value={870} data-date-segment="Apr 03">14:30</option><option value={900} data-date-segment="Apr 03">15:00</option><option value={930} data-date-segment="Apr 03">15:30</option><option value={960} data-date-segment="Apr 03">16:00</option><option value={990} data-date-segment="Apr 03">16:30</option><option value={1020} data-date-segment="Apr 03">17:00</option><option value={1050} data-date-segment="Apr 03">17:30</option><option value={1080} data-date-segment="Apr 03">18:00</option><option value={1110} data-date-segment="Apr 03">18:30</option><option value={1140} data-date-segment="Apr 03">19:00</option><option value={1170} data-date-segment="Apr 03">19:30</option><option value={1200} data-date-segment="Apr 03">20:00</option></select>
                          UTC
                        </span>
                        <span className="hourly interval-60" style={{display: 'none'}}>
                          <select name="at" className="hourly" disabled="disabled"><option value={20} data-date-segment="Apr 02 20">:20</option><option value={30} data-date-segment="Apr 02 20">:30</option><option value={40} data-date-segment="Apr 02 20">:40</option><option value={50} data-date-segment="Apr 02 20">:50</option><option disabled>-----</option><option value={0} data-date-segment="Apr 02 21">:00</option></select>
                        </span>
                        <span className="every-10-mins interval-10" style={{display: 'none'}}>
                          <span className="estimation" />
                          <input type="hidden" name="at" defaultValue={0} disabled />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="on-edit item_actions--editing">
                <input type="submit" className="btn btn-xs btn-primary" defaultValue="Save" />
                <a className="non-destructive btn btn-xs btn-link cancel" href="#">Cancel</a>
              </div>
            </form>
          </span>
      </div>
    );
  }
}

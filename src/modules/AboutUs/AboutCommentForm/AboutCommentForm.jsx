import React from "react";

import routes from "../../../Routes";
import Button from "../../../shared/components/ButtonRender";

const AboutCommentForm = () => (
  <div className="comments-part pb-4 pb-sm-5">
    <div className="container">
      <div className="comm-form">
        <h3 className="comm-head-three">Leave a Comment</h3>
        <form>
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name*"
              />
            </div>
            <div className="col-xs-12 col-sm-4">
              <input
                type="text"
                className="form-control"
                placeholder="Email*"
              />
            </div>
            <div className="col-xs-12 col-sm-4">
              <input
                type="text"
                className="form-control"
                placeholder="Website"
              />
            </div>
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows={6}
              placeholder="Review*"
              defaultValue={""}
            />
          </div>
          <Button title="Submit" link={routes.ABOUT_US} />
        </form>
      </div>
    </div>
  </div>
);

export default AboutCommentForm;

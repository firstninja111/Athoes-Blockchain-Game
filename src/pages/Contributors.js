import AvatarCodeBlock from '../component/AvatarCodeBlock'
import './Contributors.css';
import uu from '../assets/members/uu.jpg';
import Navbar from '../component/Navbar';

function Contributors() {
  return (
    <div>
      <Navbar/>
      <div className="Contributors">
          <div className='container'>
            <div className='con-introduce'>
              <div className='con-introduce-title'>
                Contributors
              </div>
              <div className='con-introduce-content'>
                We are a multinational DAO of over 150 talented and promising professionals 
                in our respective fields, and counting. Our vision for our strategic growth is 
                global, inclusive, and with an authentic aim to embody decentralization as 
                an ideal of blue-skies, limitless thinking.
              </div>
            </div>
            <hr className="gradient-header-spliter"/>
            <ul className='avatar-section'>
              <AvatarCodeBlock 
                gradientType={1}
                avatar={uu} 
                fullName="Alexander Popov" 
                position="Co-founder"
                role="admin"
                twitter="https://twitter.com/abc"
                instagram="https://instagram.com/abc"
                artstation="https://artstation.com/abc"
              />
              <AvatarCodeBlock 
                gradientType={2}
                avatar={uu} 
                fullName="Marcel Reyes" 
                position="Game-producer"
                role="adviser"
                twitter="https://twitter.com/abc"
                youtube="https://youtube.com/abc"
                linkedin="https://linkedin.com/abc"
                github="https://github.com/ccc"
              />
              <AvatarCodeBlock 
                gradientType={3}
                avatar={uu} 
                fullName="Danny Wilson"
                position="CFO"
                role="admin"
                linkedin="https://linkedin.com/abc"
                github="https://github.com/ccc"
              />
              <AvatarCodeBlock 
                gradientType={4}
                avatar={uu}
                fullName="Nate Wells" 
                position="Lead Concept Artist"
                role="artist"
                tumblr="https//tumblr.com/ccc"
                linkedin="https//linkedin.com/ccc"
                artstation="https//artstation.com/ccc"
              />
              <AvatarCodeBlock 
                gradientType={5}
                avatar={uu} 
                fullName="Pedro Bergamini" 
                position="Lead Animator"
                role="artist"
                twitter="https://twitter.com/abc"
                youtube="https://youtube.com/abc"
                instagram="https://instagram.com/abc"
              />
              <AvatarCodeBlock 
                gradientType={1}
                avatar={uu} 
                fullName="Alexander Popov" 
                position="Co-founder"
                role="admin"
                tumblr="https//tumblr.com/ccc"
                linkedin="https//linkedin.com/ccc"
                instagram="https://instagram.com/abc"
              />
              <AvatarCodeBlock 
                gradientType={2}
                avatar={uu} 
                fullName="Marcel Reyes" 
                position="Game-producer"
                role="adviser"
                tumblr="https//tumblr.com/ccc"
                linkedin="https//linkedin.com/ccc"
                artstation="https//artstation.com/ccc"
              />
              <AvatarCodeBlock 
                gradientType={3}
                avatar={uu} 
                fullName="Danny Wilson" 
                position="CFO"
                role="admin"
                twitter="https://twitter.com/abc"
                youtube="https://youtube.com/abc"
                github="https://github.com/ccc"
              />

            </ul>

            {/* ============== Simple Blocks Group =============== */}


            <hr className="gradient-header-spliter"/>
            <ul className='avatar-section'>
              <AvatarCodeBlock 
                imageHide={true}
                gradientType={1}
                fullName="Benjamin Nietzche" 
                position="Lead Game Designer"
                role="admin"
                twitter="https://twitter.com/abc"
              />
              <AvatarCodeBlock 
                imageHide={true}
                gradientType={2}
                fullName="Ergin Duzu" 
                position="Lead Technical Artist"
                role="artist"
              />
              <AvatarCodeBlock 
                imageHide={true}
                gradientType={3}
                fullName="Tim Jermolaev"
                position="Game Developer"
                role="engineering"
                linkedin="https://linkedin.com/abc"
                github="https://github.com/ccc"
              />
              <AvatarCodeBlock 
                imageHide={true}
                gradientType={4}
                fullName="Nate Wells" 
                position="Lead Concept Artist"
                role="artist"
                artstation="https//artstation.com/ccc"
              />
              <AvatarCodeBlock 
                imageHide={true}
                gradientType={5}
                fullName="Sergey Vassilyev" 
                position="Web Developer"
                role="web"
                twitter="https://twitter.com/abc"
              />
              <AvatarCodeBlock 
                imageHide={true}
                gradientType={1}
                fullName="Alexander Popov" 
                position="Co-founder"
                role="admin"
                linkedin="https//linkedin.com/ccc"
                instagram="https://instagram.com/abc"
              />
              <AvatarCodeBlock 
                imageHide={true}
                gradientType={2}
                fullName="Czenas Rodriguez" 
                position="Game-producer"
                role="adviser"
                tumblr="https//tumblr.com/ccc"
                linkedin="https//linkedin.com/ccc"
                artstation="https//artstation.com/ccc"
              />
              <AvatarCodeBlock 
                imageHide={true}
                gradientType={3}
                fullName="Matt Kronschnabel"
                position="Rigger"
                role="artist"
                github="https://github.com/ccc"
              />
              <AvatarCodeBlock 
                imageHide={true}
                gradientType={1}
                fullName="Tin Nguyen"
                position="Rigger"
                role="artist"
                twitter="https://twitter.com/abc"
                youtube="https://youtube.com/abc"
                github="https://github.com/ccc"
              />
              <AvatarCodeBlock 
                imageHide={true}            
                gradientType={3}
                fullName="Estevan Wisoczynski"
                position="Rigger"
                role="artist"
                twitter="https://twitter.com/abc"
                youtube="https://youtube.com/abc"
                github="https://github.com/ccc"
              />
              <AvatarCodeBlock 
                imageHide={true}            
                gradientType={3}
                fullName="Abolfazl Sayadi"
                position="Rigger"
                role="artist"
                twitter="https://twitter.com/abc"
                youtube="https://youtube.com/abc"
                github="https://github.com/ccc"
              />
              <AvatarCodeBlock 
                imageHide={true}
                gradientType={3}
                fullName="Fernando Iguago"
                position="Technical Artist"
                role="artist"
              />
              <AvatarCodeBlock 
                imageHide={true}            
                gradientType={3}
                fullName="Estevan Wisoczynski"
                position="Rigger"
                role="artist"
                twitter="https://twitter.com/abc"
                youtube="https://youtube.com/abc"
                github="https://github.com/ccc"
              />
              <AvatarCodeBlock 
                imageHide={true}
                gradientType={1}
                fullName="Tin Nguyen"
                position="Rigger"
                role="artist"
                twitter="https://twitter.com/abc"
                youtube="https://youtube.com/abc"
                github="https://github.com/ccc"
              />
            </ul>

            {/* ============== Join Team Block =============== */}


            <hr className="gradient-header-spliter"/>
            <div className='contact-section'>
              <h2 className='contact-us-title text-white mt-4'>Join Our Team</h2>
              <form>
                <div className="form__row">
                  <div className="form-group">
                    <input name="firstName" id="firstName" placeholder="First name"/>
                    <span className="error-text">First name is required</span>
                  </div>
                  <div className="form-group">
                    <input name="lastName" id="lastName" placeholder="Last name"/>
                    <span className="error-text">Last name is required</span>
                  </div>
                </div>
                <div className="form__row">
                  <div className="form-group">
                    <input name="email" id="email" placeholder="Email"/>
                    <span className="error-text">Email is required</span>
                  </div>
                  <div className="form-group">
                    <input type="tel" name="phone" id="phone" placeholder="Phone"/>
                    <span className="error-text">Phone is required</span>
                  </div>
                </div>
                <div className="form__row">
                  <div className="form-group">
                    <input name="discord" id="discord" placeholder="Discord ID (optional)"/>
                  </div>
                  <div className="form-group">
                    <input name="linked-in" id="linked-in" placeholder="LinkedIn (optional)"/>
                  </div>
                </div>
                <div className="form__row">
                  <div className="form-group">
                    <input name="website" id="website" placeholder="Website/Portfolio/Demo Reel (optional)"/>
                  </div>
                  <div className="form-group">
                    <input type="file" name="resume" id="resume" placeholder="CV" accept="application/pdf"/>
                  </div>
                </div>
                <div className="form-group">
                  <textarea name="cover-letter" id="cover-letter" placeholder="Why do you want to join us?"></textarea>
                </div>
                <div className="form__footer">
                  <button className="copy-link">
                    <svg className='me-2' width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M3.78676 0.889429C2.16014 0.889429 0.841501 2.28221 0.841501 4.00029C0.841501 5.71837 2.16014 7.11115 3.78676 7.11115H6.31126C6.54363 7.11115 6.73201 7.31012 6.73201 7.55556C6.73201 7.801 6.54363 7.99997 6.31126 7.99997H3.78676C1.69539 7.99997 0 6.20925 0 4.00029C0 1.79133 1.69539 0.000611859 3.78676 0.000611859H6.31126C6.54363 0.000611859 6.73201 0.19958 6.73201 0.44502C6.73201 0.690461 6.54363 0.889429 6.31126 0.889429H3.78676Z" fill="#9E9E9E"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.20782 4.00023C4.20782 3.75478 4.3962 3.55582 4.62857 3.55582H11.3606C11.593 3.55582 11.7813 3.75478 11.7813 4.00023C11.7813 4.24567 11.593 4.44463 11.3606 4.44463H4.62857C4.3962 4.44463 4.20782 4.24567 4.20782 4.00023Z" fill="#9E9E9E"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.2014 0.888817C13.828 0.888817 15.1467 2.2816 15.1467 3.99968C15.1467 5.71776 13.828 7.11054 12.2014 7.11054H9.6769C9.44452 7.11054 9.25615 7.30951 9.25615 7.55495C9.25615 7.80039 9.44452 7.99935 9.6769 7.99935H12.2014C14.2928 7.99935 15.9882 6.20864 15.9882 3.99968C15.9882 1.79072 14.2928 0 12.2014 0H9.6769C9.44452 0 9.25615 0.198968 9.25615 0.444409C9.25615 0.689849 9.44452 0.888817 9.6769 0.888817H12.2014Z" fill="#9E9E9E"></path>
                    </svg>Copy link </button>
                  <div className="submit-button-container">
                    <button className="submit-button" disabled="" type="submit">Apply</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Contributors;

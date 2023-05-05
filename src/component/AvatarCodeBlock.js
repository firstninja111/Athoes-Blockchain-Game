import './AvatarCodeBlock.css';
import { useEffect, useState } from 'react';
import { FaTwitter, FaLinkedinIn, FaTumblr, FaArtstation, FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function AvatarCodeBlock({gradientType, imageHide, avatar, fullName, position, role, twitter, instagram, artstation, youtube, tumblr, linkedin, github}) {
  const [hover, setHover] = useState(false);
  const [badge, setBadge] = useState();
  const initilaizeBadgeClass = (role) => {
    let _calssName;
    switch(role){
      case "admin":
        _calssName = "bg-danger";
        break;
      case "art director":
        _calssName = "bg-warning";
        break;
      case "advisor":
        _calssName = "bg-secondary";
        break;
      case "artist":
        _calssName = "bg-warning";
        break;
      case "marketing":
        _calssName = "bg-success";
        break;
      default:
        _calssName = "bg-info";
        break;
    }
    setBadge(_calssName);
  }

  useEffect(()=>{
    initilaizeBadgeClass(role);
  }, [])
  return (
    <li className="AvatarCodeBlock">
      <div className={`gradient-block gradient-hover`}>
        <div className="card__container card-container--is-highlighted">
          {
            !imageHide &&
            <div className='avatar-image-back position-relative' style={{backgroundImage:`url(${avatar})`}}>
              <img style={{width: '100%'}} alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27278%27%20height=%27278%27/%3e"/>
            </div>
          }
          
          <div className='avatar-detail'>
            <p className='avatar-name'>{fullName}</p>
            <p className='avatar-role'>{position}</p>
            <div className='avatar-footer'>
              {/* <span className={`badge ${badge}`}>{role}</span> */}
              <div></div>
              <div className="social-container">
                {
                  twitter &&
                  <Link to={twitter}><FaTwitter/></Link>
                }
                {
                  linkedin &&
                  <Link to={linkedin}><FaLinkedinIn/></Link>
                }
                {
                  tumblr &&
                  <Link to={tumblr}><FaTumblr/></Link>
                }
                {
                  artstation &&
                  <Link to={artstation}><FaArtstation/></Link>
                }
                {
                  youtube &&
                  <Link to={youtube}><FaYoutube/></Link>
                }
                {
                  github &&
                  <Link to={github}><FaGithub/></Link>
                }
                {
                  instagram &&
                  <Link to={instagram}><FaInstagram/></Link>
                }
              </div>
            </div>
          </div>
          {/* <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
            <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
              <img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27278%27%20height=%27278%27/%3e"/>
            </span>
            <img alt="Kieran Warwick" srcset="/_next/image?url=%2Fimages%2Fteam%2Fkieran-warwick.png&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fkieran-warwick.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fteam%2Fkieran-warwick.png&amp;w=640&amp;q=75" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"/>
          </span>
          <div class="card__item">
            <h2 class="card__name">Kieran Warwick</h2>
            <h3 class="card__title">Co-founder</h3>
          </div>
          <div class="card__footer">
            <span style="--color:#e74c3c" class="styles__Role-sc-1jdhril-1 dAXvzK">admin</span>
            <div class="footer__socials">
              <a href="https://twitter.com/KieranWarwick" data-type="twitter" target="_blank" class="styles__SocialIcon-sc-1jdhril-2 iNXyBc"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
              <a href="https://www.instagram.com/chemazing/" data-type="instagram" target="_blank" class="styles__SocialIcon-sc-1jdhril-2 iNXyBc"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></a>
              <a href="https://www.linkedin.com/in/kieran-warwick-66194b79/" data-type="linkedIn" target="_blank" class="styles__SocialIcon-sc-1jdhril-2 iNXyBc"><svg style="position:relative;top:-1px" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg></a>
            </div>
          </div> */}
        </div>
      </div>
    </li>
  );
}

export default AvatarCodeBlock;

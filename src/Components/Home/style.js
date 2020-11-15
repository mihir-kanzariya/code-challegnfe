import styled from "@emotion/styled";
import { COLORS, SIDEBAR } from "Helpers/theme";

const { PRIMARY, SECONDARY, WHITE, LIGHT_GRAY, BLACK, LIGHT_BLUE } = COLORS;
const { WIDTH } = SIDEBAR;

export const Container = styled("section")`
  width: calc(100% - ${WIDTH}px);
  color: ${SECONDARY};
  .home__top--section {
    padding: 60px;
    border-radius: 0px 0px 24px 0px;
    background: #f3f3fb 0% 0% no-repeat padding-box;
    .home__section--greetings {
      font-weight: bold;
      font-size: 24px;
      h3 {
        margin: 15px 0;
      }
      .home__section--name {
        color: ${PRIMARY};
      }
    }
    .home__section--title {
      font-size: 36px;
      color: ${BLACK};
      margin-bottom: 15px;
    }
  }
  .validation__error--msg {
    color : #ff4d4f;
    line-height: 1.5715;
    position : absolute;
    transition: color .3s cubic-bezier(.215,.61,.355,1);
    font-size: 14px;
    top: 50px;
  }
  .home__bottom--section {
    padding: 0 60px 66px;
    .home__section--cards {
      display: flex;
      margin-top: -45px;
      flex-wrap: wrap;
      .home__cards--items {
        background: #ffffff 0% 0% no-repeat padding-box;
        padding: 15px 20px;
        box-shadow: 0px 5px 10px #a9a9a966;
        border-radius: 4px;
        margin-right: 25px;
        margin-bottom: 25px;
        position: relative;
        display: flex;
        flex: 25%;
        :last-child {
          margin-right: 0px;
        }
        img {
          width: 80px;
          height: 68px;
          margin-right: 20px;
        }
        .home__cards--information {
          display: flex;
          flex-direction: column;
          .home__cards--title {
            color: ${BLACK};
            font-size: 14px;
            font-weight: bold;
            margin : 0 5px 12px 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            ::after {
              content: "->";
              position: absolute;
              right: 20px;
            }
          }
          .home__cards--description {
            color: ${LIGHT_GRAY};
            font-size: 12px;
          }
        }
      }
    }
    .home__section--title {
      margin-top: 35px;
      color: ${SECONDARY};
      font-size: 20px;
      font-weight: bold;
      h3 {
        margin-bottom: 15px;
      }
    }
    .home__section--description {
      color: ${LIGHT_GRAY};
      font-size: 14px;
    }
    .home__packages--cards {
      margin-top: 12px;
      .home__packages--items {
        display: flex;
        justify-content: space-around;
        background: #ffffff 0% 0% no-repeat padding-box;
        box-shadow: 0px 5px 10px #a9a9a91a;
        border: 1px solid #ececec;
        border-radius: 4px;
        padding: 15px 30px;
        margin-bottom: 25px;
        width : 100%;
        img {
          width: 48px;
          height: 48px;
          margin-right: 20px;
        }
        .home__packages--information {
          display: flex;
          flex-direction: column;
          margin-right:15px;
          .home__packages--title {
            color: ${BLACK};
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 12px;s
          }
          .home__packages--description {
            color: ${LIGHT_GRAY};
            font-size: 12px;
            width : 400px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .home__packages--prices {
          display : flex;
          flex-direction: column;
          width: 320px;
          .home__packages--title {
            color: ${LIGHT_GRAY};
            text-transform: uppercase;
            font-size: 12px;
          }
          .home__packages--amt{
            color: ${LIGHT_BLUE};
            font-size: 18px;
            font-weight: bold;
            margin: 8px 0;
          }
        }
        .home__packages--order button {
            text-transform: uppercase;
            font-weight:bold;
            font-size:14px;
            border-radius: 25px;
            width: 156px;
            height: 49px;            
            outline : none;
            color : ${LIGHT_BLUE};
            background: #ECF4F9 0% 0% no-repeat padding-box;
            border : 1px solid #ECF4F9;
            &.active {
              color: ${WHITE};
              background: #4648C3 0% 0% no-repeat padding-box;
            }
          }
      }
    }
    .home__refer--wrapper{
      margin-top : 25px;
      .home__refer--title {
        color: ${SECONDARY};
        font-size: 20px;
      }
      .home__refer--description {
        color: ${SECONDARY};
        font-size: 12px;
        margin-bottom: 25px;
      }
      .home__refer--information{        
        h4{
          color: ${SECONDARY};
          font-weight : medium;
          font-size: 14px;
        }
        .home__referform--wrapper{
          display : flex;
          width : 100%;          
          .home__refer--form{
            width : 60%;
            margin-right : 60px;
            .column {
              display : flex;
              justify-content: space-between;
              .home__refer--formitem {
                position : relative;
                input {                  
                  background: #FFFFFF 0% 0% no-repeat padding-box;
                  border: 1px solid #3C498A;
                  border-radius: 4px;
                  width: 328px;
                  height: 49px;
                  font-size : 14px;
                  padding : 15px;
                  margin-bottom: 22px;
                  &:focus {
                    border : 2px solid ${PRIMARY}
                  }
                }
              }
            }
            button {
              border: 1px solid #4648C3;
              background: #4648C3 0% 0% no-repeat padding-box;
              outline : none;
              border-radius: 25px;
              width: 156px;
              height: 49px;
              text-transform: uppercase;
              color: ${WHITE};
              margin-right: 60px;
              cursor : pointer;
            }
            hr {
              margin-right: 65px;
              color : #A9A9A966;
              opacity : 0.5;
            }
            .home__refer--footer{
              margin-top: 15px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              p{
                color: #B7B7B7;
              }              
            }
          }
          .home__refer--box{
            width : 40%;
            text-align: center;
            img {
              height: 277px;
              width: 308px;
            }
          }
        }
      }
    }
    @media screen and (max-width: 1220px) {
      .home__section--cards .home__cards--items {
        img {        
          width: 50px;
          height: 48px;
          margin-right: 15px;
        }        
        .home__cards--information .home__cards--title {
          width : 130px;
        }
      } 
      .home__packages--cards .home__packages--items  {
        .home__packages--information .home__packages--description {
          width : 365px;
        }
      }
      .home__refer--wrapper .home__refer--information .home__referform--wrapper {
        flex-direction : column;
        .home__refer--form .column .home__refer--formitem input {
       width : 260px;   
        }
        .home__refer--form{
          width : 100%;
        }
        .home__refer--box {
          margin-top : 25px;
          width : 100%;
        }
      }
    }
  }
  @media screen and (max-width: 992px) {
    .home__top--section .home__section--title {
      font-size : 30px;
    }
    .home__bottom--section{
      .home__section--cards .home__cards--items {
        flex: 50%;
        :last-child {
          margin-right: 15px;
        }
      }
      .home__packages--cards .home__packages--items  {
        img {
          width: 40px;
          height: 40px;
          margin-right: 18px;
        }
        .home__packages--information .home__packages--description {
          width : 160px;
        }
        .home__packages--prices .home__packages--amt {
          font-size : 14px;
        }
        .home__packages--order button {
          width: 135px;
          font-size : 12px;
        }
      }
      .home__refer--wrapper .home__refer--information .home__referform--wrapper {
        .home__refer--form input {
          margin-right : 0px;
        }
        .home__refer--box img {
          height: 170p;
          width: 240px;
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    width : 100%;
    .home__top--section .home__section--title {
      font-size : 30px;
    }
  }
  @media screen and (max-width: 600px) {
    .home__section--cards {
      flex-direction: column;
    }
    .home__bottom--section .home__packages--cards .home__packages--items {
      padding: 10px 6px;
      img { 
        margin-right : 15px;
      }
      .home__packages--information .home__packages--description {
        width : 100px;
      }
      .home__packages--prices {
        width : 120px;
      }
    }
    .home__bottom--section .home__refer--wrapper .home__refer--information .home__referform--wrapper .home__refer--form .column .home__refer--formitem input {
      width : 215px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

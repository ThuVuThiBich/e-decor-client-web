import { Avatar, Box, Button, Card, Typography } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import PlaceIcon from "@material-ui/icons/Place";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { shopSelector } from "redux/selectors";
import { getShop } from "redux/shopRedux";
import { useStyles } from "./styles";

export default function ShopInfo(props) {
 const dispatch = useDispatch();
  const { id } = useParams();
  const shop = useSelector(shopSelector).shop;
  const classes = useStyles({ coverImage: shop?.coverImage });
  useEffect(() => {
    dispatch(getShop(id));
  }, [dispatch, id]);
  return (
    <Card className={classes.root}>
      <Box className={classes.wallpaper}></Box>
      <Box className={classes.main}>
        <Avatar alt={shop?.avatar} src="" className={classes.avatar} />
        <Box className={classes.info}>
          <Box className={classes.top}>
            <Box className={classes.name}>
              <Typography className={classes.text}>{shop?.name}</Typography>
            </Box>
            <Box className={classes.link}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  className={`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-yoec1g ${classes.linkIcon}`}
                  focusable="false"
                  viewBox="0 0 30 30"
                  aria-hidden="true"
                >
                  <circle cx="15" cy="15" r="15" fill="#3B5998"></circle>
                  <path
                    d="M12.7208 22H15.5937V16.098H18.1823L18.4667 13.1651H15.5937V11.6842C15.5937 11.2773 15.9153 10.9474 16.312 10.9474H18.4667V8H16.312C14.3286 8 12.7208 9.64948 12.7208 11.6842V13.1651H11.2843L11 16.098H12.7208V22Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  className={`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-yoec1g ${classes.linkIcon}`}
                  focusable="false"
                  viewBox="0 0 30 30"
                  aria-hidden="true"
                >
                  <circle cx="15" cy="15" r="15" fill="#00ACEE"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.5556 8C12.4147 8 13.1111 8.69645 13.1111 9.55556V11.8889H17.7778C18.6369 11.8889 19.3333 12.5853 19.3333 13.4444C19.3333 14.3036 18.6369 15 17.7778 15H13.1111V16.5556C13.1111 17.8442 14.1558 18.8889 15.4444 18.8889H17.7778C18.6369 18.8889 19.3333 19.5853 19.3333 20.4444C19.3333 21.3036 18.6369 22 17.7778 22H15.4444C12.4376 22 10 19.5624 10 16.5556V9.55556C10 8.69645 10.6964 8 11.5556 8Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  className={`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-yoec1g ${classes.linkIcon}`}
                  focusable="false"
                  viewBox="0 0 30 30"
                  aria-hidden="true"
                >
                  <circle cx="15" cy="15" r="15" fill="#FF0000"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.25 11.5H19.75C20.1642 11.5 20.5 11.8358 20.5 12.25V18.25C20.5 18.6642 20.1642 19 19.75 19H9.25C8.83579 19 8.5 18.6642 8.5 18.25V12.25C8.5 11.8358 8.83579 11.5 9.25 11.5ZM7 12.25C7 11.0074 8.00736 10 9.25 10H19.75C20.9926 10 22 11.0074 22 12.25V18.25C22 19.4926 20.9926 20.5 19.75 20.5H9.25C8.00736 20.5 7 19.4926 7 18.25V12.25ZM13 13L16 15.25L13 17.5V13Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  className={`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-lzy523 ${classes.linkIcon}`}
                  focusable="false"
                  viewBox="0 0 30 30"
                  aria-hidden="true"
                >
                  <circle cx="15" cy="15" r="15" fill="#E1306C"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 11.8182C13.2427 11.8182 11.8182 13.2427 11.8182 15C11.8182 16.7573 13.2427 18.1818 15 18.1818C16.7573 18.1818 18.1818 16.7573 18.1818 15C18.1818 13.2427 16.7573 11.8182 15 11.8182ZM13.0909 15C13.0909 16.0544 13.9456 16.9091 15 16.9091C16.0544 16.9091 16.9091 16.0544 16.9091 15C16.9091 13.9456 16.0544 13.0909 15 13.0909C13.9456 13.0909 13.0909 13.9456 13.0909 15Z"
                    fill="white"
                  ></path>
                  <path
                    d="M18.8182 10.5455C18.4667 10.5455 18.1818 10.8304 18.1818 11.1818C18.1818 11.5333 18.4667 11.8182 18.8182 11.8182C19.1696 11.8182 19.4545 11.5333 19.4545 11.1818C19.4545 10.8304 19.1696 10.5455 18.8182 10.5455Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.5455 8C9.13964 8 8 9.13964 8 10.5455V19.4545C8 20.8604 9.13964 22 10.5455 22H19.4545C20.8604 22 22 20.8604 22 19.4545V10.5455C22 9.13964 20.8604 8 19.4545 8H10.5455ZM19.4545 9.27273H10.5455C9.84255 9.27273 9.27273 9.84255 9.27273 10.5455V19.4545C9.27273 20.1575 9.84255 20.7273 10.5455 20.7273H19.4545C20.1575 20.7273 20.7273 20.1575 20.7273 19.4545V10.5455C20.7273 9.84255 20.1575 9.27273 19.4545 9.27273Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </Box>
          </Box>
          <Box className={classes.bottom}>
            <Box>
              <Rating
                value={
                  Number(shop?.avgRatings) === 0
                    ? 5
                    : Number(shop?.avgRatings)
                }
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
                readOnly
              />
              <Box mt={1} className={classes.subText} display={"flex"}>
                <PlaceIcon className={classes.icon} />
                <Typography className={classes.detail} component={"span"}>
                  {shop?.addressDetail ? `${shop?.addressDetail}, ` : ""}
                  {shop?.ward.name}, {shop?.district.name}, {shop?.city.name}
                </Typography>
              </Box>
              <Box mt={1} className={classes.subText} display={"flex"}>
                <CallIcon className={classes.icon} />
                <Typography className={classes.detail} component={"span"}>
                  {shop?.phone || "N/A"}
                </Typography>
              </Box>
            </Box>
            <Button variant="outlined" color="primary">
              Contact Shop
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

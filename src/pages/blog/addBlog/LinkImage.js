import {
  Box,
  Button,
  Fade,
  FormControlLabel,
  IconButton,
  makeStyles,
  Paper,
  Popper,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import objectAssign from "object-assign";
import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import RegionSelect from "react-region-select";
import { useHistory } from "react-router-dom";
import { storeImageItem, storeItem } from "redux/blogRedux";
import { getPurchasedProducts } from "redux/productRedux";
import {
  blogSelector,
  categorySelector,
  productSelector,
} from "redux/selectors";
import { isEmpty } from "underscore";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#2b3445",
    fontSize: 25,
    marginBottom: 0,
    marginTop: 0,
    fontWeight: 700,
    lineHeight: 1,
    marginLeft: 12,
    whiteSpace: "normal",
  },
  icon: {
    fontSize: 24,
    color: "#D23F57",
  },
  //
  editor: {
    "& .ql-container": {
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      // background: "#fefcfc",
      height: 200,
    },
    "& .ql-toolbar": {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      background: "#f5f5f5",
    },
  },
  //
  wallInput: {
    display: "none",
  },
  wallLabel: {
    "& .MuiIconButton-root": {
      backgroundColor: "#E3E9EF",
      "&:hover": {
        backgroundColor: "rgba(15, 52, 96, 0.04)",
      },
    },
  },
}));

export default function LinkImage(props) {
  const dispatch = useDispatch();

  const { images } = useSelector(blogSelector);
  const { purchasedProducts } = useSelector(productSelector);
  const { categories } = useSelector(categorySelector);
  const [categoryId, setCategoryId] = useState(null);

  //
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const [open, setOpen] = useState(Boolean(anchorEl));
  const id = open ? "transitions-popper" : undefined;

  //

  const { imageObj } = props;
  const classes = useStyles();
  const history = useHistory();
  const [coords, setCoords] = useState([]);
  const [regions, setRegions] = useState([]);

  const [isAction, setIsAction] = useState(false);

  useEffect(() => {
    dispatch(getPurchasedProducts({ categoryId }));
  }, [categoryId, dispatch]);

  const detectObjects = (area) => {
    // console.log(area);
    // this.setState({ savedObject: area });
    let img = document.getElementById("image");
    let xPx = img.clientWidth * area.x * 0.01;
    let yPx = img.clientHeight * area.y * 0.01;
    let widthPx = img.clientWidth * area.width * 0.01;
    let heightPx = img.clientHeight * area.height * 0.01;

    // Inverted y-axis, because by default the origin point
    //  in the upper left corner. We do it in the lower left.
    // let reverseY = img.clientHeight - yPx;
    console.log("img.clientWidth", img.clientWidth);
    console.log("img.clientHeight", img.clientHeight);
    console.log(`Object coordinates:: 
    First point: [${xPx.toFixed(2)} px, ${yPx.toFixed(2)} px], 
    Second point: [${(xPx + widthPx).toFixed(2)} px, ${(yPx + heightPx).toFixed(
      2
    )} px]`);
    setCoords([
      +xPx.toFixed(2),
      +yPx.toFixed(2),
      +(xPx + widthPx).toFixed(2),
      +(yPx + heightPx).toFixed(2),
    ]);
  };
  const changeRegionData = (index, event) => {
    const region = regions[index];
    let color;
    detectObjects(regions[0]);
    color = "rgba(0, 0, 255, 0.2)";

    region.data.regionStyle = {
      background: color,
    };
    onChange([
      ...regions.slice(0, index),
      objectAssign({}, region, {
        data: objectAssign({}, region.data, { dataType: event.target.value }),
      }),
      ...regions.slice(index + 1),
    ]);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const regionStyle = {
    background: "rgba(0, 0, 255, 0.5)",
    // zIndex: 99,
  };

  const onChange = (regions) => {
    // console.log(regions);
    setRegions(regions);
  };
  const regionRenderer = (regionProps) => {
    if (!regionProps.isChanging) {
      return (
        <div style={{ position: "absolute", right: 0, bottom: "-1.5em" }}>
          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            style={{ zIndex: 100, minWidth: 170 }}
            onClick={(event) => changeRegionData(regionProps.index, event)}
            value={regionProps.data.dataType}
          >
            Add product's link
          </Button>
        </div>
      );
    }
  };

  //
  useEffect(() => {
    props?.imageLink &&
      dispatch(
        storeImageItem({
          id: props?.index,
          image: props.imageLink,
          items:
            images.filter((item) => +item.id === +props?.index)[0]?.items || [],
        })
      );
  }, [dispatch, images, props.imageLink, props?.index]);
  return (
    <Box my={2}>
      <RegionSelect
        maxRegions={1}
        regions={regions}
        regionStyle={regionStyle}
        onChange={onChange}
        regionRenderer={regionRenderer}
        style={{ border: "1px solid black" }}
        constraint={true}
      >
        <img id="image" alt="alt" src={imageObj} />
      </RegionSelect>
      <Popper id={id} open={Boolean(anchorEl)} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={classes.paper}>
              <Box px={4} pt={4}>
                <Typography
                  gutterBottom
                  style={{ fontSize: 16, fontWeight: "bold", marginBottom: 16 }}
                >
                  Select your purchased products
                </Typography>
                {!isAction ? (
                  <Box>
                    <RadioGroup
                      name="value"
                      value={categoryId}
                      onChange={(event, value) => {
                        console.log(value);
                        setCategoryId(+value);
                      }}
                    >
                      {categories?.map((datum, index) => (
                        <FormControlLabel
                          label={datum.name}
                          key={index}
                          value={+datum.id}
                          control={<Radio color="primary" />}
                        />
                      ))}
                    </RadioGroup>
                  </Box>
                ) : (
                  <Box>
                    {isEmpty(purchasedProducts) ? (
                      <Box display="flex" justifyContent="center">
                        <Box p={2}>No Products Yet.</Box>
                      </Box>
                    ) : (
                      purchasedProducts?.map((item, index) => (
                        <Box
                          style={{ cursor: "pointer" }}
                          key={index}
                          onClick={() => {
                            dispatch(
                              storeItem({
                                id: index,
                                data: { productId: item.id, coords },
                              })
                            );
                            setAnchorEl(null);
                          }}
                        >
                          <Box
                            display={"flex"}
                            justifyContent="space-between"
                            alignItems="center"
                            style={{ minWidth: 200 }}
                          >
                            <Box display={"flex"} alignItems="center">
                              <img
                                width={50}
                                height={50}
                                src={item?.images?.[0]?.image}
                                alt=""
                              />
                              <Box>
                                <Typography
                                  style={{
                                    marginLeft: 8,
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                    maxWidth: 270,
                                    paddingRight: 16,
                                  }}
                                >
                                  {item?.name}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      ))
                    )}
                  </Box>
                )}
              </Box>
              <Box
                p={1}
                display="flex"
                justifyContent={isAction ? "flex-start" : "flex-end"}
              >
                {isAction ? (
                  <IconButton
                    onClick={() => {
                      setIsAction(!isAction);
                    }}
                  >
                    <ArrowBackIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => {
                      setIsAction(!isAction);
                    }}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                )}
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  );
}

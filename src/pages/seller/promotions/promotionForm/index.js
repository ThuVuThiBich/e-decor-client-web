import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addPromotion } from "redux/promotionRedux";
import { promotionSelector, shopSelector } from "redux/selectors";
import { useStyles } from "./styles";

export default function PromotionForm(props) {
  const { id } = useParams();
  const { promotions } = useSelector(promotionSelector);
  const { currentShop } = useSelector(shopSelector);

  const [promotion, setPromotion] = useState({
    content: "",
    discount: "",
    standarFee: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [content, setContent] = useState(promotion?.content);
  const [discount, setDiscount] = useState(promotion?.discount);
  const [standarFee, setStandarFee] = useState(promotion?.standarFee);

  useEffect(() => {
    id !== "add" &&
      setPromotion(
        promotions?.filter((promotion) => +promotion.id === +id)?.[0]
      );
  }, [promotions, id]);

  useEffect(() => {
    if (id !== "add") {
      setContent(promotion?.content);
      setStandarFee(promotion?.standarFee);
      setDiscount(promotion?.discount);
    }
  }, [promotion?.standarFee, id, promotion?.discount, promotion?.content]);
  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };
  const handleChangeDiscount = (event) => {
    setDiscount(event.target.value);
  };
  const handleChangeStandarFee = (event) => {
    setStandarFee(event.target.value);
  };

  const handleSubmit = () => {
    const promotion = { content, discount, standarFee };
    console.log(promotion);
    // if (id === "add") {
      dispatch(addPromotion({ id: currentShop.id, body: promotion }));
    // } else {
      // dispatch(updatePromotion({ id, promotion }));
    // }
    history.push("/shop/promotions");
  };
  return (
    <Paper>
      <Box p={4}>
        <Box mb={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FormControl variant="outlined" margin="dense" fullWidth>
                <InputLabel htmlFor="component-outlined">
                  Tên chương trình giảm giá
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={content}
                  onChange={handleChangeContent}
                  label="Tên chương trình giảm giá"
                  placeholder="Tên chương trình giảm giá"
                />
              </FormControl>
              <FormControl
                variant="outlined"
                margin="dense"
                fullWidth
                className={classes.discount}
              >
                <InputLabel htmlFor="component-outlined">
                  Giá trị hóa đơn giảm giá
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={standarFee}
                  onChange={handleChangeStandarFee}
                  label="Giá trị hóa đơn giảm giá"
                  placeholder="Giá trị hóa đơn giảm giá (VND)"
                  inputProps={{ type: "text" }}
                />
              </FormControl>
              <FormControl
                variant="outlined"
                margin="dense"
                fullWidth
                className={classes.discount}
              >
                <InputLabel htmlFor="component-outlined">
                  Phần trăm giảm giá
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={discount}
                  onChange={handleChangeDiscount}
                  label="Phần trăm giảm giá"
                  placeholder="Phần trăm giảm giá (%)"
                  inputProps={{ type: "text" }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>
        </Box>
        <Box>
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            {id === "add" ? "Add New" : "Save Changes"}
          </Button>
        </Box>
      </Box>
      <ToastContainer autoClose={2000} style={{ marginTop: "100px" }} />
    </Paper>
  );
}

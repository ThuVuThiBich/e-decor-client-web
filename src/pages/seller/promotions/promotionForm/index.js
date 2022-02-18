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
import discountImg from "assets/images/discount.png";
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
    dispatch(addPromotion({ id: currentShop.id, body: promotion }));

    history.push("/shop/promotions");
  };
  return (
    <Paper>
      <Box p={4}>
        <Box mb={4} display="flex" alignItems="center">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box
                mb={2}
                style={{ color: "#2b3445", fontWeight: 600, fontSize: 18 }}
              >
                New Promotion
              </Box>
              <FormControl variant="outlined" margin="dense" fullWidth>
                <InputLabel htmlFor="component-outlined">
                  Promotion's Name
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={content}
                  onChange={handleChangeContent}
                  label="Promotion's Name"
                  placeholder="Promotion's Name"
                />
              </FormControl>
              <FormControl
                disabled={id !== "add"}
                variant="outlined"
                margin="dense"
                fullWidth
                className={classes.discount}
              >
                <InputLabel htmlFor="component-outlined">
                  Order Value
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={standarFee}
                  onChange={handleChangeStandarFee}
                  label="Order Value"
                  placeholder="Order Value ($)"
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
                  Discount Value
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={discount}
                  onChange={handleChangeDiscount}
                  label="Discount Value"
                  placeholder="Discount Value (%)"
                  inputProps={{ type: "text" }}
                />
              </FormControl>
              <Box mt={2}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleSubmit}
                >
                  {id === "add" ? "Add New" : "Save Changes"}
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <img src={discountImg} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <ToastContainer autoClose={2000} style={{ marginTop: "100px" }} />
    </Paper>
  );
}

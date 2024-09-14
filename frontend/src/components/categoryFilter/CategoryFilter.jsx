import "./CategoryFilter.scss";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion, { accordionClasses } from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";

const CategoryFilter = () => {
  return (
    <div className="categoryFilter">
      {/* catgeory, size, bestseller, in Stock */}
      <AccordionGroup
        sx={(theme) => ({
          maxWidth: 400,
          [`& .${accordionClasses.root}`]: {
            marginTop: "1rem",
            transition: "0.2s ease",
            '& button:not([aria-expanded="true"])': {
              transition: "0.2s ease",
              paddingBottom: "0.625rem",
            },
            "& button:hover": {
              background: "transparent",
            },
          },
          [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
            borderBottom: "1px solid",
            borderColor: "background.level2",
          },
          '& [aria-expanded="true"]': {
            boxShadow: `inset 0 -1px 0 ${theme.vars.palette.divider}`,
          },
        })}>
        <Accordion>
          <AccordionSummary className="accordion-text">
            Category
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Men Clothes"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Women Fashion"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Kids Fashion"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary className="accordion-text">Size</AccordionSummary>
          <AccordionDetails>
            <FormGroup className="accordion-text">
              <FormControlLabel
                control={<Checkbox />}
                label="S"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="M"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="L"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="XL"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="XXL"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary className="accordion-text">Brand</AccordionSummary>
          <AccordionDetails>
            <FormGroup className="accordion-text">
              <FormControlLabel
                control={<Checkbox />}
                label="Nike"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Amiris"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Moncler"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Gucci"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Dior"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary className="accordion-text">Color</AccordionSummary>
          <AccordionDetails>
            <FormGroup className="accordion-text">
              <FormControlLabel
                control={<Checkbox />}
                label="Nike"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Amiris"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Moncler"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Gucci"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Dior"
                sx={{ ".MuiFormControlLabel-label": { fontSize: "14px" } }}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </div>
  );
};

export default CategoryFilter;

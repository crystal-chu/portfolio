(function() {
  const annotate = RoughNotation.annotate;
  const annotationGroup = RoughNotation.annotationGroup;
  const COLOR_YELLOW = "#FFD17C";

  const annotateHelper = (query, config) => {
    const e = document.querySelector(query);
    const annotation = annotate(e, config);
    annotation.show();
  };

  const onHover = (query, config) => {
    const e = document.querySelector(query);
    const annotation = annotate(e, config);
    e.addEventListener("mouseenter", () => {
      annotation.show();
    });
    e.addEventListener("mouseleave", () => annotation.hide());
  };
  const onHoverAll = (query, config) => {
    const allElements = document.querySelectorAll(query);
    for (const e of allElements) {
      const annotation = annotate(e, config);
      e.addEventListener("mouseenter", () => {
        annotation.show();
      });
      e.addEventListener("mouseleave", () => annotation.hide());
    }
  };

  annotateHelper("#designer", {
    type: "underline",
    color: COLOR_YELLOW,
    strokeWidth: 5,
    animationDelay: 500
  });
  onHoverAll(".underline-wave", {
    type: "underline",
    color: COLOR_YELLOW,
    strokeWidth: 3
  });
})();

const plans = {
  balanced: {
    calorie: "1450 kcal",
    protein: "95 g",
    water: "2200 ml",
    meals: [
      {
        time: "07:30",
        title: "早餐",
        detail: "无糖酸奶一杯、鸡蛋 2 个、全麦面包 2 片、蓝莓一小把。",
        kcal: "340 kcal"
      },
      {
        time: "10:30",
        title: "加餐",
        detail: "一个苹果或小番茄一盒，补充纤维避免午餐前暴食。",
        kcal: "110 kcal"
      },
      {
        time: "12:30",
        title: "午餐",
        detail: "糙米饭半碗、香煎鸡胸肉、清炒西兰花和菌菇，少油少盐。",
        kcal: "470 kcal"
      },
      {
        time: "16:00",
        title: "下午加餐",
        detail: "一杯无糖豆浆，搭配 10 粒杏仁，提升饱腹感。",
        kcal: "160 kcal"
      },
      {
        time: "18:30",
        title: "晚餐",
        detail: "虾仁蔬菜沙拉加玉米半根，搭配南瓜汤一小碗。",
        kcal: "370 kcal"
      }
    ],
    split: [
      { label: "早餐", value: 24, color: "linear-gradient(90deg, #d46f4d, #ec9d67)" },
      { label: "午餐", value: 33, color: "linear-gradient(90deg, #6f9b6b, #9cc294)" },
      { label: "晚餐", value: 26, color: "linear-gradient(90deg, #f0b564, #f6cf8e)" },
      { label: "加餐", value: 17, color: "linear-gradient(90deg, #9d4527, #d46f4d)" }
    ],
    swaps: [
      "奶茶想喝时，换成美式加少量奶或无糖拿铁。",
      "白米饭可以部分替换成糙米、藜麦或玉米。",
      "嘴馋想吃薯片时，换成空气爆米花或黄瓜条。",
      "高糖甜点改成希腊酸奶加奇亚籽和水果。"
    ],
    movement: {
      focus: "饭后 20 分钟快走 + 晚间 15 分钟拉伸",
      detail: "把运动拆成更容易完成的小段，比一次性高强度训练更容易坚持。饭后走路还能帮助稳定食欲与血糖波动。"
    }
  },
  busy: {
    calorie: "1380 kcal",
    protein: "88 g",
    water: "2000 ml",
    meals: [
      {
        time: "07:50",
        title: "早餐",
        detail: "即食燕麦杯 + 牛奶 + 水煮蛋 2 个，5 分钟内搞定。",
        kcal: "320 kcal"
      },
      {
        time: "10:40",
        title: "加餐",
        detail: "高蛋白酸奶 1 杯，避免开会时低血糖。",
        kcal: "120 kcal"
      },
      {
        time: "12:20",
        title: "午餐",
        detail: "轻食碗：鸡腿肉、南瓜、玉米粒、生菜，酱料减半。",
        kcal: "450 kcal"
      },
      {
        time: "15:50",
        title: "下午加餐",
        detail: "低糖蛋白棒半根或一根小香蕉，防止下班路上乱吃。",
        kcal: "130 kcal"
      },
      {
        time: "19:00",
        title: "晚餐",
        detail: "便利店组合：茶叶蛋、即食鸡胸、蔬菜杯、无糖豆浆。",
        kcal: "360 kcal"
      }
    ],
    split: [
      { label: "早餐", value: 23, color: "linear-gradient(90deg, #d46f4d, #ec9d67)" },
      { label: "午餐", value: 34, color: "linear-gradient(90deg, #6f9b6b, #9cc294)" },
      { label: "晚餐", value: 26, color: "linear-gradient(90deg, #f0b564, #f6cf8e)" },
      { label: "加餐", value: 17, color: "linear-gradient(90deg, #9d4527, #d46f4d)" }
    ],
    swaps: [
      "赶时间点外卖时，备注少油少饭，优先双份蔬菜。",
      "面包店早餐换成全麦三明治，不选奶油酥皮。",
      "晚间加班想点炸鸡时，改点烤鸡腿或关东煮。",
      "含糖饮料统一替换成气泡水或冷泡茶。"
    ],
    movement: {
      focus: "通勤多走 2500 步 + 工位伸展 8 分钟",
      detail: "忙碌模式里不追求完美训练量，只追求今天确实动起来。把电梯换成楼梯，把短程打车换成步行，减脂更可持续。"
    }
  },
  "high-protein": {
    calorie: "1520 kcal",
    protein: "118 g",
    water: "2500 ml",
    meals: [
      {
        time: "07:20",
        title: "早餐",
        detail: "蛋白奶昔一杯、全麦吐司 2 片、牛油果半个、水煮蛋 2 个。",
        kcal: "360 kcal"
      },
      {
        time: "10:20",
        title: "加餐",
        detail: "低脂奶酪条或希腊酸奶，帮助维持蛋白质摄入。",
        kcal: "140 kcal"
      },
      {
        time: "12:40",
        title: "午餐",
        detail: "牛肉藜麦碗，搭配彩椒、羽衣甘蓝和蘑菇。",
        kcal: "500 kcal"
      },
      {
        time: "16:10",
        title: "下午加餐",
        detail: "毛豆一小碗或蛋白布丁，训练日前后都适合。",
        kcal: "150 kcal"
      },
      {
        time: "18:50",
        title: "晚餐",
        detail: "煎三文鱼配芦笋和土豆泥小份，兼顾恢复和饱腹感。",
        kcal: "370 kcal"
      }
    ],
    split: [
      { label: "早餐", value: 24, color: "linear-gradient(90deg, #d46f4d, #ec9d67)" },
      { label: "午餐", value: 33, color: "linear-gradient(90deg, #6f9b6b, #9cc294)" },
      { label: "晚餐", value: 24, color: "linear-gradient(90deg, #f0b564, #f6cf8e)" },
      { label: "加餐", value: 19, color: "linear-gradient(90deg, #9d4527, #d46f4d)" }
    ],
    swaps: [
      "普通酸奶换成希腊酸奶，蛋白质更高、饱腹感更强。",
      "五花肉换鸡腿肉或牛里脊，更利于控制脂肪。",
      "夜宵想吃面时，换成魔芋面或豆腐丝。",
      "甜口零食改成高蛋白布丁或无糖豆乳。"
    ],
    movement: {
      focus: "力量训练 30 分钟 + 睡前舒缓拉伸 10 分钟",
      detail: "塑形模式更重视保留肌肉量，因此蛋白质更高，建议配合基础抗阻训练。训练后 1 小时内安排正餐或蛋白补充会更稳。"
    }
  }
};

const state = {
  currentMode: "balanced",
  completedMeals: new Set(),
  waterCount: 0
};

const mealTimeline = document.querySelector("#mealTimeline");
const macroSplit = document.querySelector("#macroSplit");
const swapList = document.querySelector("#swapList");
const movementPlan = document.querySelector("#movementPlan");
const waterTracker = document.querySelector("#waterTracker");
const calorieTarget = document.querySelector("#calorieTarget");
const proteinTarget = document.querySelector("#proteinTarget");
const waterTarget = document.querySelector("#waterTarget");
const waterStatus = document.querySelector("#waterStatus");
const completionRate = document.querySelector("#completionRate");
const progressRing = document.querySelector(".progress-ring");
const modeButtons = document.querySelectorAll(".mode-pill");
const exportBtn = document.querySelector("#exportBtn");
const todayLabel = document.querySelector("#todayLabel");

function updateDateLabel() {
  const today = new Date();
  todayLabel.textContent = today.toLocaleDateString("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "long"
  });
}

function renderPlan() {
  const plan = plans[state.currentMode];

  calorieTarget.textContent = plan.calorie;
  proteinTarget.textContent = plan.protein;
  waterTarget.textContent = plan.water;

  mealTimeline.innerHTML = plan.meals
    .map((meal, index) => {
      const mealKey = `${state.currentMode}-${index}`;
      const isDone = state.completedMeals.has(mealKey);

      return `
        <article class="timeline-card">
          <span class="timeline-time">${meal.time}</span>
          <h3>${meal.title}</h3>
          <p>${meal.detail}</p>
          <div class="timeline-meta">
            <small>${meal.kcal}</small>
            <button class="check-btn ${isDone ? "done" : ""}" type="button" data-meal="${mealKey}">
              ${isDone ? "已完成" : "标记完成"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  macroSplit.innerHTML = plan.split
    .map(
      (item) => `
        <div class="split-item">
          <div class="split-row">
            <strong>${item.label}</strong>
            <span>${item.value}%</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${item.value}%; background: ${item.color};"></div>
          </div>
        </div>
      `
    )
    .join("");

  swapList.innerHTML = plan.swaps.map((item) => `<li>${item}</li>`).join("");

  movementPlan.innerHTML = `
    <div class="coach-highlight">
      <strong>${plan.movement.focus}</strong>
      <span>把减脂目标拆成今天真正能做到的一步。</span>
    </div>
    <p>${plan.movement.detail}</p>
  `;

  bindMealButtons();
  updateCompletion();
}

function renderWaterTracker() {
  waterTracker.innerHTML = Array.from({ length: 8 }, (_, index) => {
    const active = index < state.waterCount ? "active" : "";
    return `<button class="water-cup ${active}" type="button" data-cup="${index + 1}">${index + 1} 杯</button>`;
  }).join("");

  waterStatus.textContent = `${state.waterCount} / 8 杯`;

  document.querySelectorAll(".water-cup").forEach((button) => {
    button.addEventListener("click", () => {
      state.waterCount = Number(button.dataset.cup);
      renderWaterTracker();
      updateCompletion();
    });
  });
}

function bindMealButtons() {
  document.querySelectorAll(".check-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const mealKey = button.dataset.meal;

      if (state.completedMeals.has(mealKey)) {
        state.completedMeals.delete(mealKey);
      } else {
        state.completedMeals.add(mealKey);
      }

      renderPlan();
    });
  });
}

function updateCompletion() {
  const totalTasks = plans[state.currentMode].meals.length + 1;
  const mealDoneCount = plans[state.currentMode].meals.filter((_, index) =>
    state.completedMeals.has(`${state.currentMode}-${index}`)
  ).length;
  const hydrated = state.waterCount >= 6 ? 1 : 0;
  const completed = mealDoneCount + hydrated;
  const percent = Math.round((completed / totalTasks) * 100);

  completionRate.textContent = `${percent}%`;
  progressRing.style.background = `conic-gradient(var(--primary) ${percent * 3.6}deg, rgba(212, 111, 77, 0.15) ${percent * 3.6}deg)`;
}

function exportPlan() {
  const plan = plans[state.currentMode];
  const modeName = document.querySelector(".mode-pill.active").textContent.trim();
  const lines = [
    `LeanDay 今日计划`,
    `模式：${modeName}`,
    `目标热量：${plan.calorie}`,
    `蛋白质建议：${plan.protein}`,
    `饮水目标：${plan.water}`,
    "",
    "餐次安排：",
    ...plan.meals.map((meal) => `${meal.time} ${meal.title}｜${meal.detail}（${meal.kcal}）`),
    "",
    "食材替换建议：",
    ...plan.swaps.map((item, index) => `${index + 1}. ${item}`),
    "",
    `运动建议：${plan.movement.focus}`,
    plan.movement.detail
  ];

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `leanday-${state.currentMode}-plan.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modeButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.currentMode = button.dataset.mode;
    state.waterCount = 0;
    renderWaterTracker();
    renderPlan();
  });
});

exportBtn.addEventListener("click", exportPlan);

updateDateLabel();
renderWaterTracker();
renderPlan();

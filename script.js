const weekdays = [
  { key: "mon", label: "周一", vibe: "轻盈重启日" },
  { key: "tue", label: "周二", vibe: "节奏稳定日" },
  { key: "wed", label: "周三", vibe: "中段续航日" },
  { key: "thu", label: "周四", vibe: "抗疲劳补给日" },
  { key: "fri", label: "周五", vibe: "克制不破功日" },
  { key: "sat", label: "周六", vibe: "松弛但不失控" },
  { key: "sun", label: "周日", vibe: "温柔收尾日" }
];

const balancedWeek = {
  mon: { calorie: 1450, protein: 95, water: 2200, snackRescue: "希腊酸奶 + 草莓几颗，甜口欲望会被温柔接住。", meals: [
    { time: "07:30", title: "早餐", detail: "酸奶燕麦杯、鸡蛋 2 个、奇异果 1 个。", kcal: 320, tags: ["高纤开局", "不容易饿"] },
    { time: "10:30", title: "加餐", detail: "小番茄一盒，或一小个苹果。", kcal: 100, tags: ["防暴食"] },
    { time: "12:30", title: "午餐", detail: "糙米饭半碗、鸡胸肉、西兰花和胡萝卜。", kcal: 470, tags: ["经典减脂餐"] },
    { time: "16:00", title: "下午加餐", detail: "无糖豆浆 1 杯 + 杏仁 8 粒。", kcal: 150, tags: ["稳住下午"] },
    { time: "18:30", title: "晚餐", detail: "虾仁沙拉配南瓜汤，主打清爽收尾。", kcal: 360, tags: ["晚间轻负担"] }
  ] },
  tue: { calorie: 1470, protein: 96, water: 2200, snackRescue: "毛豆一小碗，咸口满足感比饼干更稳。", meals: [
    { time: "07:40", title: "早餐", detail: "全麦三明治、煎蛋、生菜、无糖拿铁。", kcal: 340, tags: ["通勤友好"] },
    { time: "10:20", title: "加餐", detail: "香蕉半根加无糖酸奶。", kcal: 120, tags: ["平稳续航"] },
    { time: "12:20", title: "午餐", detail: "牛肉藜麦碗，搭配菌菇和彩椒。", kcal: 480, tags: ["蛋白足"] },
    { time: "16:10", title: "下午加餐", detail: "低糖蛋白酸奶一杯。", kcal: 140, tags: ["开会不乱吃"] },
    { time: "19:00", title: "晚餐", detail: "清蒸鱼 + 清炒时蔬 + 玉米半根。", kcal: 390, tags: ["温和高饱腹"] }
  ] },
  wed: { calorie: 1430, protein: 94, water: 2250, snackRescue: "黄瓜条 + 鹰嘴豆泥，脆感强又没那么罪恶。", meals: [
    { time: "07:30", title: "早餐", detail: "鸡蛋蔬菜卷 + 无糖豆乳。", kcal: 310, tags: ["中周减负"] },
    { time: "10:40", title: "加餐", detail: "梨一个或蓝莓一小把。", kcal: 100, tags: ["清清爽爽"] },
    { time: "12:30", title: "午餐", detail: "鸡腿排、南瓜、羽衣甘蓝沙拉。", kcal: 460, tags: ["饱腹持久"] },
    { time: "15:50", title: "下午加餐", detail: "奶酪条或无糖酸奶。", kcal: 130, tags: ["防下班饿"] },
    { time: "18:40", title: "晚餐", detail: "番茄豆腐煲 + 西葫芦 + 小份红薯。", kcal: 380, tags: ["暖胃又清淡"] }
  ] },
  thu: { calorie: 1480, protein: 98, water: 2300, snackRescue: "热豆浆或温牛奶一杯，疲惫时先补一点温热感。", meals: [
    { time: "07:50", title: "早餐", detail: "热燕麦粥、鸡蛋 2 个、橙子半个。", kcal: 330, tags: ["补能量"] },
    { time: "10:30", title: "加餐", detail: "核桃 3 颗 + 圣女果。", kcal: 120, tags: ["抗疲劳"] },
    { time: "12:10", title: "午餐", detail: "照烧鸡肉饭减酱版，加双份绿叶菜。", kcal: 500, tags: ["中段补给"] },
    { time: "16:10", title: "下午加餐", detail: "高蛋白酸奶 + 一点麦片。", kcal: 160, tags: ["稳住甜食欲"] },
    { time: "19:00", title: "晚餐", detail: "菌菇鸡汤面，主食控制小份。", kcal: 370, tags: ["舒服但不重"] }
  ] },
  fri: { calorie: 1500, protein: 97, water: 2300, snackRescue: "气泡水 + 冷藏葡萄几颗，替代周五想喝甜饮的冲动。", meals: [
    { time: "07:40", title: "早餐", detail: "全麦贝果半个、炒蛋、牛油果。", kcal: 350, tags: ["周五也克制"] },
    { time: "10:40", title: "加餐", detail: "无糖拿铁或黑咖啡搭配坚果。", kcal: 110, tags: ["提神"] },
    { time: "12:30", title: "午餐", detail: "轻食碗：牛肉、生菜、南瓜、藜麦。", kcal: 490, tags: ["外食也稳"] },
    { time: "16:20", title: "下午加餐", detail: "蛋白棒半根或一个小苹果。", kcal: 130, tags: ["防聚餐前乱吃"] },
    { time: "19:10", title: "晚餐", detail: "聚餐日建议先选烤、蒸、煮，主食减半。", kcal: 420, tags: ["社交弹性"] }
  ] },
  sat: { calorie: 1520, protein: 92, water: 2400, snackRescue: "水果酸奶杯，小小有仪式感，周末更容易坚持。", meals: [
    { time: "08:30", title: "早餐", detail: "法式酸奶碗、草莓、香蕉片、奇亚籽。", kcal: 360, tags: ["周末可爱感"] },
    { time: "11:00", title: "加餐", detail: "小番茄 + 奶酪块。", kcal: 120, tags: ["防午餐拖太晚"] },
    { time: "13:00", title: "午餐", detail: "三文鱼饭碗，搭配牛油果和黄瓜。", kcal: 500, tags: ["满足感高"] },
    { time: "16:30", title: "下午加餐", detail: "无糖豆乳布丁或蛋白布丁。", kcal: 150, tags: ["甜感替代"] },
    { time: "19:00", title: "晚餐", detail: "蔬菜汤 + 鸡肉卷，轻松收尾不负担。", kcal: 390, tags: ["周末不失控"] }
  ] },
  sun: { calorie: 1440, protein: 93, water: 2250, snackRescue: "热可可风味无糖奶饮，想慰藉的时候更柔和。", meals: [
    { time: "08:20", title: "早餐", detail: "全麦吐司、鸡蛋、低糖花生酱和蓝莓。", kcal: 330, tags: ["慢慢起床"] },
    { time: "10:50", title: "加餐", detail: "苹果一个或猕猴桃两个。", kcal: 100, tags: ["清爽补纤维"] },
    { time: "12:40", title: "午餐", detail: "家常番茄牛肉 + 紫薯小份 + 青菜。", kcal: 480, tags: ["家常舒服"] },
    { time: "16:00", title: "下午加餐", detail: "酸奶一杯，准备迎接新的一周。", kcal: 120, tags: ["稳定心情"] },
    { time: "18:20", title: "晚餐", detail: "豆腐虾仁汤 + 生菜沙拉，晚餐清淡一点。", kcal: 350, tags: ["周日收尾"] }
  ] }
};

const overrides = {
  busy: {
    snack: ["高蛋白酸奶随手拿，会议前不用乱找零食。", "无糖豆浆 + 一小包坚果，最适合忙碌通勤。", "茶叶蛋一个，简单但顶饿。", "便利店毛豆或关东煮白萝卜，轻松垫一口。", "气泡水 + 奶酪条，适合周五下班前。", "低糖酸奶杯，周末出门也方便。", "小香蕉 + 无糖咖啡，收心不费力。"],
    breakfast: ["即食燕麦杯、鸡蛋 2 个、无糖咖啡，5 分钟搞定。", "全麦三明治 + 无糖拿铁，边通勤边安排。", "蛋白酸奶杯 + 香蕉半根，简单但不空腹。", "热豆浆 + 鸡蛋 + 玉米，温热又省时。", "全麦面包 2 片 + 奶酪片 + 水煮蛋。", "酸奶水果杯，出门前快速补给。", "吐司 + 花生酱薄抹 + 热奶，轻松收心。"],
    lunch: ["外卖轻食碗：鸡胸肉、生菜、南瓜、糙米，酱汁减半。", "便利餐盒优先选牛肉或鸡肉，主食半份。", "三明治加蛋白质单品，避免只吃面包。", "关东煮 + 玉米 + 茶叶蛋，忙起来也能凑一餐。", "外食优先烤鸡、牛肉饭减饭版，加蔬菜。", "商场简餐选沙拉或日式烤物，少酱。", "简化家常碗饭，主食控制半碗。"],
    dinner: ["便利店组合：即食鸡胸、蔬菜杯、无糖豆浆。", "家里没时间做时，选清汤面加蛋和青菜。", "豆腐汤 + 鸡蛋 + 蔬菜，轻一点更好睡。", "冷藏沙拉 + 虾仁或鸡肉，省力收尾。", "聚餐前先垫一点酸奶，正式吃时不容易失控。", "周末外出就选烤物、汤类和小份主食。", "一锅番茄豆腐汤，周日晚上最省事。"],
    calorie: -70,
    protein: -7
  },
  "high-protein": {
    snack: ["高蛋白布丁，甜口友好又能补蛋白。", "毛豆 + 无糖酸奶，双份蛋白更稳。", "奶酪条和小番茄，轻巧但抗饿。", "蛋白奶昔半杯，疲惫时更快恢复。", "希腊酸奶加一点莓果，周五也不破功。", "蛋白酸奶碗，周末有满足感。", "温豆乳 + 水煮蛋，柔和收尾。"],
    breakfast: ["蛋白酸奶碗、鸡蛋 2 个、全麦吐司 2 片。", "牛油果鸡蛋三明治 + 高蛋白奶。", "蛋白奶昔 + 奶酪片 + 蓝莓。", "燕麦 + 乳清酸奶 + 水煮蛋，饱腹更久。", "吐司、炒蛋、低脂火鸡胸，周五也要保蛋白。", "周末蛋白碗：酸奶、奇亚籽、坚果碎。", "花生酱薄抹吐司 + 鸡蛋 2 个 + 无糖奶。"],
    lunch: ["鸡胸肉藜麦碗，配西兰花和毛豆。", "牛肉饭减饭版，加双份蛋白和时蔬。", "三文鱼饭碗，主打高蛋白和好脂肪。", "鸡腿排 + 南瓜 + 羽衣甘蓝，恢复感更强。", "轻食碗加双倍鸡肉，主食减半。", "烤牛肉或烤鸡腿搭配藜麦和沙拉。", "番茄牛肉配紫薯，家常版高蛋白。"],
    dinner: ["虾仁豆腐煲 + 生菜沙拉，蛋白高但不厚重。", "煎鱼排 + 芦笋 + 小份土豆泥。", "蛋白质优先：鸡胸肉卷配蘑菇汤。", "鸡丝菌菇汤面，面量少一点。", "聚餐选烤鱼或烤肉，先吃蛋白再动主食。", "三文鱼蔬菜盘，周末也有仪式感。", "虾仁蛋花汤 + 豆腐，温柔但扎实。"],
    calorie: 80,
    protein: 22
  }
};

const adjustments = {
  mood: {
    calm: { summary: "心情平稳，适合照着计划完整执行。", calorie: 0, water: 0, snack: "保持固定加餐时间，不用额外加甜。", movement: "适合正常快走或轻力量训练。" },
    tired: { summary: "有点疲惫时，优先温热食物和更温柔的运动。", calorie: 40, water: 100, snack: "下午加餐优先热豆浆、温牛奶或香蕉。", movement: "把训练降成散步和拉伸，也算完成。" },
    happy: { summary: "状态不错，适合把计划做得更完整一点。", calorie: 0, water: 150, snack: "想奖励自己时，选水果酸奶杯更稳。", movement: "可以多走一点，或者加 10 分钟力量练习。" },
    stressed: { summary: "压力大时最怕情绪性乱吃，今天更需要缓冲零食。", calorie: 60, water: 150, snack: "提前准备健康加餐，别等饿到失控。", movement: "先散步 10 分钟，让脑子和胃都慢下来。" }
  },
  cycle: {
    normal: { summary: "普通日常状态，按标准计划走就很好。", calorie: 0, protein: 0, water: 0, swap: "正常保持高蛋白 + 高纤维节奏。", movement: "正常进行轻运动或力量训练。" },
    period: { summary: "生理期中更适合温热、补铁、轻负担的安排。", calorie: 80, protein: 4, water: 200, swap: "冷饮和过辣先放一放，汤类和温热主食更舒服。", movement: "改成散步、拉伸、舒缓瑜伽就很好。" },
    "pre-period": { summary: "经前更容易嘴馋和水肿，今天要重点防甜食失控。", calorie: 70, protein: 2, water: 200, swap: "巧克力欲望来了时，先试可可酸奶或高蛋白布丁。", movement: "维持低压运动，帮助缓解烦躁和浮肿。" },
    "post-period": { summary: "经后状态常会回升，可以把节奏慢慢拉回来。", calorie: 20, protein: 6, water: 100, swap: "优先高蛋白和蔬菜，恢复期很适合重新发力。", movement: "如果精神不错，可以恢复到正常训练量。" }
  },
  weather: {
    sunny: { summary: "晴天更适合安排户外步行和清爽餐。", water: 100, mealHint: "今天蔬果和冷拌类会更容易入口。", movement: "饭后晒晒太阳去走一走。" },
    rainy: { summary: "下雨天容易想吃重口热食，记得别把安慰感吃过头。", water: 0, mealHint: "今天可以把一餐换成汤类热食，舒服又不乱。", movement: "室内拉伸、跟练或原地走都可以。" },
    cold: { summary: "偏冷时会自然想吃更多，温热饱腹比硬忍更有效。", water: 150, mealHint: "汤、炖、热燕麦、热豆浆会更适合今天。", movement: "先活动开身体再运动，更容易进入状态。" },
    hot: { summary: "偏热时食欲可能忽高忽低，记得补水和电解质感。", water: 250, mealHint: "水果、酸奶、轻食碗更适合今天。", movement: "把运动放在傍晚，别顶着热气硬练。" }
  }
};

const fortunes = [
  { badge: "小吉", title: "适合轻盈开局", summary: "今天更适合稳稳执行，不需要和自己较劲。", good: "宜：清爽饮食", soft: "宜：饭后散步", avoid: "忌：空腹硬撑" },
  { badge: "软萌吉", title: "适合温柔补给", summary: "先把身体照顾好，计划自然更容易坚持。", good: "宜：热汤热粥", soft: "宜：规律加餐", avoid: "忌：报复性吃甜" },
  { badge: "平稳吉", title: "适合把节奏拉回来", summary: "不求完美，只求今天回到轨道上。", good: "宜：提前备餐", soft: "宜：补水打卡", avoid: "忌：熬夜外卖" },
  { badge: "元气吉", title: "适合多走一步", summary: "今天状态不错，可以把计划做完整一点。", good: "宜：蛋白优先", soft: "宜：轻力量训练", avoid: "忌：周末过量放纵" }
];

const state = {
  currentMode: "balanced",
  currentDay: weekdays[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1].key,
  mood: "calm",
  cycle: "normal",
  weather: "sunny",
  completedMeals: new Set(),
  waterCount: 0
};

const weekdayTabs = document.querySelector("#weekdayTabs");
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
const moodSelect = document.querySelector("#moodSelect");
const cycleSelect = document.querySelector("#cycleSelect");
const weatherSelect = document.querySelector("#weatherSelect");
const activeDayLabel = document.querySelector("#activeDayLabel");
const snackRescue = document.querySelector("#snackRescue");
const conditionSummary = document.querySelector("#conditionSummary");
const fortuneBadge = document.querySelector("#fortuneBadge");
const fortuneTitle = document.querySelector("#fortuneTitle");
const fortuneSummary = document.querySelector("#fortuneSummary");
const fortuneGood = document.querySelector("#fortuneGood");
const fortuneSoft = document.querySelector("#fortuneSoft");
const fortuneAvoid = document.querySelector("#fortuneAvoid");

function updateDateLabel() {
  const today = new Date();
  todayLabel.textContent = today.toLocaleDateString("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "long"
  });
}

function clonePlanForMode(mode) {
  const index = weekdays.findIndex((day) => day.key === state.currentDay);
  const plan = JSON.parse(JSON.stringify(balancedWeek[state.currentDay]));
  if (mode === "balanced") {
    return plan;
  }
  const override = overrides[mode];
  plan.calorie += override.calorie;
  plan.protein += override.protein;
  plan.snackRescue = override.snack[index];
  plan.meals[0].detail = override.breakfast[index];
  plan.meals[2].detail = override.lunch[index];
  plan.meals[4].detail = override.dinner[index];
  return plan;
}

function getAdjustedPlan() {
  const plan = clonePlanForMode(state.currentMode);
  const mood = adjustments.mood[state.mood];
  const cycle = adjustments.cycle[state.cycle];
  const weather = adjustments.weather[state.weather];

  plan.calorie += mood.calorie + cycle.calorie;
  plan.protein += cycle.protein;
  plan.water += mood.water + cycle.water + weather.water;
  plan.snackRescue = mood.snack;

  if (state.weather === "cold" || state.weather === "rainy") {
    plan.meals[4].detail += " 今天更适合温热一点的版本。";
  }
  if (state.cycle === "period") {
    plan.meals[1].detail = "温热红枣酸奶或香蕉半根，舒服一点更重要。";
    plan.meals[3].detail = "热豆浆或温牛奶，优先稳定身体状态。";
  }
  if (state.mood === "stressed") {
    plan.meals[3].detail = "准备好的健康加餐先吃掉，别等到暴饿才找东西。";
  }

  return plan;
}

function renderWeekTabs() {
  weekdayTabs.innerHTML = weekdays.map((day) => `
    <button class="weekday-btn ${day.key === state.currentDay ? "active" : ""}" type="button" data-day="${day.key}">
      ${day.label}
      <span>${day.vibe}</span>
    </button>
  `).join("");

  document.querySelectorAll(".weekday-btn").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentDay = button.dataset.day;
      renderWeekTabs();
      renderWaterTracker();
      renderPlan();
    });
  });
}

function renderFortune() {
  const fortuneIndex = weekdays.findIndex((day) => day.key === state.currentDay)
    + Object.keys(adjustments.mood).indexOf(state.mood)
    + Object.keys(adjustments.weather).indexOf(state.weather);
  const fortune = fortunes[fortuneIndex % fortunes.length];

  fortuneBadge.textContent = fortune.badge;
  fortuneTitle.textContent = fortune.title;
  fortuneSummary.textContent = fortune.summary;
  fortuneGood.textContent = fortune.good;
  fortuneSoft.textContent = fortune.soft;
  fortuneAvoid.textContent = fortune.avoid;
}

function renderPlan() {
  const plan = getAdjustedPlan();
  const mood = adjustments.mood[state.mood];
  const cycle = adjustments.cycle[state.cycle];
  const weather = adjustments.weather[state.weather];
  const activeDay = weekdays.find((day) => day.key === state.currentDay);

  activeDayLabel.textContent = `${activeDay.label}计划`;
  calorieTarget.textContent = `${plan.calorie} kcal`;
  proteinTarget.textContent = `${plan.protein} g`;
  waterTarget.textContent = `${plan.water} ml`;

  mealTimeline.innerHTML = plan.meals.map((meal, index) => {
    const mealKey = `${state.currentMode}-${state.currentDay}-${index}`;
    const isDone = state.completedMeals.has(mealKey);
    return `
      <article class="timeline-card">
        <span class="timeline-time">${meal.time}</span>
        <h3>${meal.title}</h3>
        <p>${meal.detail}</p>
        <div class="timeline-flags">
          ${meal.tags.map((tag) => `<span class="tiny-tag">${tag}</span>`).join("")}
        </div>
        <div class="timeline-meta">
          <small>${meal.kcal} kcal</small>
          <button class="check-btn ${isDone ? "done" : ""}" type="button" data-meal="${mealKey}">
            ${isDone ? "已完成" : "标记完成"}
          </button>
        </div>
      </article>
    `;
  }).join("");

  const split = [
    { label: "早餐", value: 24, color: "linear-gradient(90deg, #ff8ebb, #ffc8b1)" },
    { label: "午餐", value: 34, color: "linear-gradient(90deg, #a6e7d5, #b8dcff)" },
    { label: "晚餐", value: 25, color: "linear-gradient(90deg, #ffe791, #ffc7a8)" },
    { label: "加餐", value: 17, color: "linear-gradient(90deg, #d8c7ff, #ffbad5)" }
  ];

  macroSplit.innerHTML = split.map((item) => `
    <div class="split-item">
      <div class="split-row">
        <strong>${item.label}</strong>
        <span>${item.value}%</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width: ${item.value}%; background: ${item.color};"></div>
      </div>
    </div>
  `).join("");

  const swaps = [
    cycle.swap,
    mood.snack,
    weather.mealHint,
    state.weather === "hot"
      ? "奶茶想喝时，换成无糖气泡茶或冰美式加一点奶。"
      : "嘴馋想吃炸物时，换成热汤、烤鸡或空气炸小食更稳。"
  ];
  swapList.innerHTML = swaps.map((item) => `<li>${item}</li>`).join("");

  snackRescue.innerHTML = `
    <strong>今天推荐的救场小零食</strong>
    <p>${plan.snackRescue}</p>
  `;

  conditionSummary.innerHTML = `
    <p>${mood.summary}</p>
    <p>${cycle.summary}</p>
    <p>${weather.summary}</p>
  `;

  movementPlan.innerHTML = `
    <div class="coach-highlight">
      <strong>${weather.movement}</strong>
      <span>${mood.movement}</span>
    </div>
    <p>${cycle.movement}</p>
  `;

  renderFortune();
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
  const totalTasks = getAdjustedPlan().meals.length + 1;
  const mealDoneCount = getAdjustedPlan().meals.filter((_, index) =>
    state.completedMeals.has(`${state.currentMode}-${state.currentDay}-${index}`)
  ).length;
  const hydrated = state.waterCount >= 6 ? 1 : 0;
  const percent = Math.round(((mealDoneCount + hydrated) / totalTasks) * 100);

  completionRate.textContent = `${percent}%`;
  progressRing.style.background = `conic-gradient(var(--pink) ${percent * 3.6}deg, rgba(255, 142, 187, 0.16) ${percent * 3.6}deg)`;
}

function exportPlan() {
  const plan = getAdjustedPlan();
  const dayName = weekdays.find((day) => day.key === state.currentDay).label;
  const modeName = document.querySelector(".mode-pill.active").textContent.trim();
  const lines = [
    "LeanDay 今日计划",
    `星期：${dayName}`,
    `模式：${modeName}`,
    `心情：${moodSelect.options[moodSelect.selectedIndex].text}`,
    `生理状态：${cycleSelect.options[cycleSelect.selectedIndex].text}`,
    `天气：${weatherSelect.options[weatherSelect.selectedIndex].text}`,
    `目标热量：${plan.calorie} kcal`,
    `蛋白质建议：${plan.protein} g`,
    `饮水目标：${plan.water} ml`,
    "",
    "餐次安排：",
    ...plan.meals.map((meal) => `${meal.time} ${meal.title}｜${meal.detail}（${meal.kcal} kcal）`)
  ];

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `leanday-${state.currentDay}-${state.currentMode}.txt`;
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

[moodSelect, cycleSelect, weatherSelect].forEach((select) => {
  select.addEventListener("change", () => {
    state.mood = moodSelect.value;
    state.cycle = cycleSelect.value;
    state.weather = weatherSelect.value;
    renderPlan();
  });
});

exportBtn.addEventListener("click", exportPlan);

updateDateLabel();
renderWeekTabs();
renderWaterTracker();
renderPlan();

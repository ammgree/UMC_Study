import { createMissionRequest } from "../dtos/mission.dto.js";
import { addMission, getMission } from "../repositories/mission.repository.js";

// 미션 추가
export const createMission = async (
  storeId: number,
  data: createMissionRequest,
) => {
  const missionId = await addMission(storeId, {
    title: data.title,
    body: data.body,
    reward: data.reward,
  });

  if (missionId === null) {
    throw new Error("존재하지 않는 가게입니다.");
  }

  const mission = await getMission(missionId);
  return mission;
};

import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { createMission } from "../services/mission.service.js";

// 미션 추가
export const handleCreateMission = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log("미션을 추가하려합니다!");
  console.log("body: ", req.body);

  const storeId = 1;
  const mission = await createMission(storeId, req.body);

  res.status(StatusCodes.OK).json({ result: mission });
};

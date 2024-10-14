import { NextFunction, Request, Response } from "express";
import { CreateRoomChat, UpdateRoomChat } from "../services/chat.service";
import { RoomChatPayload } from "../types/chat.type";
import { NewResponse } from "../utils/response.util";
import { CreateRoomChatValidation } from "../validations/chat.validation";

export const CreateRoomChatHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const userId = res.locals.userId;
        const payload: RoomChatPayload = req.body;

        const { value, error } = CreateRoomChatValidation(payload);
        if (error !== undefined) throw new Error(`400:${error.message}`);

        await CreateRoomChat(userId, value);
        return NewResponse(res, 201);
    } catch (error) {
        next(error);
    }
};

export const UpdateRoomChatHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const userId = res.locals.userId;
        const roomId = req.params.roomId;

        await UpdateRoomChat(roomId, userId);
        return NewResponse(res, 200);
    } catch (error) {
        next(error);
    }
};
